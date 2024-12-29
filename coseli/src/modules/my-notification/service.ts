import { AbstractNotificationProviderService } from "@medusajs/framework/utils";
import {
	ProviderSendNotificationDTO,
	ProviderSendNotificationResultsDTO,
} from "@medusajs/framework/types";
import { MedusaError } from "@medusajs/framework/utils";

import { Logger } from "@medusajs/framework/types";

type InjectedDependencies = {
	logger: Logger;
};

type Options = {
	apiKey: string;
};

class MyNotificationProviderService extends AbstractNotificationProviderService {
	static identifier = "my-notification";

	protected logger_: Logger;
	protected options_: Options;
	// assuming you're initializing a client
	protected client;

	constructor({ logger }: InjectedDependencies, options: Options) {
		super();

		this.logger_ = logger;
		this.options_ = options;

		// assuming you're initializing a client
		// this.client = new Client(options);
	}

	static validateOptions(options: Record<any, any>) {
		if (!options.api_key) {
			throw new MedusaError(
				MedusaError.Types.INVALID_DATA,
				"API key is required in the provider's options."
			);
		}
	}

	async send(
		notification: ProviderSendNotificationDTO
	): Promise<ProviderSendNotificationResultsDTO> {
		// TODO send the notification using a third-party
		// provider or custom logic.
		// for example:
		return this.client.send({
			email: notification.to,
			template: notification.template,
			template_data: notification.data,
		});
	}
}

export default MyNotificationProviderService;
