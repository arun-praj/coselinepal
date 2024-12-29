import { AbstractPaymentProvider } from "@medusajs/framework/utils";
import {
	PaymentProviderError,
	PaymentProviderSessionResponse,
	CreatePaymentProviderSession,
	PaymentSessionStatus,
	ProviderWebhookPayload,
	UpdatePaymentProviderSession,
	WebhookActionResult,
} from "@medusajs/framework/types";
import { MedusaError } from "@medusajs/framework/utils";

// Guide: https://docs.medusajs.com/resources/references/payment/provider
type Options = {
	apiKey: string;
};
class KhaltiClient {
	uri = "https://a.khalti.com/api/v2";

	getURL() {
		let url = "";
		if (process.env.NODE_ENV == "development") {
			url = "https://a.khalti.com/api/v2";
		} else if (process.env.NODE_ENV == "production") {
			url = "https://a.khalti.com/api/v2";
		} else {
			url = "https://a.khalti.com/api/v2";
		}
		return url;
	}
	initiateUrl = `${this.getURL()}/epayment/initiate/`;
	verficationURL = `${this.getURL()}/epayment/lookup/`;

	async init(context) {
		const myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Key ${process.env.KHALTI_SECRET_KEY}`
		);
		myHeaders.append("Content-Type", "application/json");

		console.log("Khalti: ", context);
		try {
			const { amount, context: customerDetails } = context;

			const res = await fetch(`${this.getURL()}/epayment/initiate/`, {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({
					return_url: process.env.KHALTI_RETURN_URL,
					website_url: process.env.KHALTI_WEBSITE_URL,
					amount:
						process.env.NODE_ENV != "production"
							? 1000
							: amount * 132,
					purchase_order_id: customerDetails?.session_id,
					purchase_order_name: customerDetails?.session_id,
					customer_info: context.customerDetails?.session_id,
				}),
			});

			return await res.json();
		} catch (e) {
			console.error(e);

			return {
				error: e.message,
			};
		}
	}
	async getStatus(paymentId: any) {
		const myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			`Key ${process.env.KHALTI_SECRET_KEY}`
		);
		myHeaders.append("Content-Type", "application/json");
		try {
			const res = await fetch(this.verficationURL, {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify({
					pidx: paymentId,
				}),
			});
			return await res.json();
		} catch (e) {
			return {
				error: e.message,
			};
		}
	}
}
class KhaltiPaymentProviderService extends AbstractPaymentProvider<Options> {
	static identifier = "khalti-payment";

	client: KhaltiClient;
	public constructor(options: Options) {
		super(options);
		this.client = new KhaltiClient();
	}
	// static validateOptions(options: Record<any, any>) {
	// 	if (!options.apiKey) {
	// 		throw new MedusaError(
	// 			MedusaError.Types.INVALID_DATA,
	// 			"API key is required in the provider's options."
	// 		);
	// 	}
	// }

	// Initiate payment: This method is called when a payment session is created. It should return a session object that can be used to redirect the customer to the payment provider's checkout page.
	async initiatePayment(
		context: CreatePaymentProviderSession
	): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
		try {
			const response = await this.client.init(context);

			return {
				...response,
				data: {
					id: response.pidx,
					pidx: response.pidx,
					payment_url: response.payment_url,
				},
			};
		} catch (e) {
			return {
				error: e,
				code: "unknown",
				detail: e,
			};
		}
	}
	async getPaymentStatus(
		paymentSessionData: Record<string, unknown>
	): Promise<PaymentSessionStatus> {
		const externalId = paymentSessionData.id;
		console.log(externalId);
		try {
			const res = await this.client.getStatus(externalId);
			console.error("getPaymentStatus", res);

			switch (res.status) {
				case "Completed":
					return "captured";
				case "Failed":
				case "Expired":
				case "Canceled":
				case "User canceled":
					return "canceled";
				default:
					return "pending";
			}
		} catch (e) {
			return "error";
		}
	}

	async capturePayment(
		paymentData: Record<string, unknown>
	): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
		try {
			const status = await this.getPaymentStatus(paymentData);
			console.error("Authorize called----", status);

			return {
				status: status,
				data: paymentData,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	}
	async authorizePayment(
		paymentSessionData: Record<string, unknown>,
		context: Record<string, unknown>
	): Promise<
		| PaymentProviderError
		| {
				status: PaymentSessionStatus;
				data: PaymentProviderSessionResponse["data"];
		  }
	> {
		console.error("Authorize called----");

		try {
			const status = await this.getPaymentStatus(paymentSessionData);
			console.error("Authorize called----", status);

			return {
				status: status,
				data: paymentSessionData,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	}
	cancelPayment(
		paymentData: Record<string, unknown>
	): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
		throw new Error("Method not implemented.");
	}

	// Not needed as Khalti doesnot support deleting payments
	deletePayment(
		paymentSessionData: Record<string, unknown>
	): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
		// throw new Error("Method not implemented.");
		//do noting
		return Promise.resolve({ data: {} });
	}

	refundPayment(
		paymentData: Record<string, unknown>,
		refundAmount: number
	): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
		throw new Error("Method not implemented.");
	}
	retrievePayment(
		paymentSessionData: Record<string, unknown>
	): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
		throw new Error("Method not implemented.");
	}
	async updatePayment(
		context: UpdatePaymentProviderSession
	): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
		try {
			const response = await this.client.init(context);

			return {
				...response,
				data: {
					id: response.pxid,
					pxid: response.pxid,
					payment_url: response.payment_url,
				},
			};
		} catch (e) {
			return {
				error: e,
				code: "unknown",
				detail: e,
			};
		}
	}
	getWebhookActionAndData(
		data: ProviderWebhookPayload["payload"]
	): Promise<WebhookActionResult> {
		throw new Error("Method not implemented.");
	}
	// TODO implement methods
}

export default KhaltiPaymentProviderService;
