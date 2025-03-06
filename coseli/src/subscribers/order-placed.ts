import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import { INotificationModuleService,IOrderModuleService } from "@medusajs/framework/types";

export default async function cartCraetedHandler({
	event: { data },
	container,
}: SubscriberArgs<{ id: string }>) {
	const notificationModuleService: INotificationModuleService =
		container.resolve(Modules.NOTIFICATION);

    const orderModuleService : IOrderModuleService =  container.resolve(Modules.ORDER)
    const order =  await orderModuleService.retrieveOrder(data.id,{
        relations:[ "billing_address","shipping_address","items"]
    })
    const order_transaction = await orderModuleService.listOrderTransactions({
        order_id: data.id
    })

	// @ts-ignore
	await notificationModuleService.createNotifications({
		to: order?.email as string,
		from: "no-reply@coselinepal.com", // Optional var, verified sender required
		channel: "email",
		template: "d-3c86a57e8a2c4f3292b5cb8353247a73",
		data:{
            email:order?.email,
            shipping_name: order?.billing_address?.first_name + ' ' +  order?.billing_address?.last_name ,
            shipping_address_1: order?.billing_address?.address_1,
            shipping_address_2: order?.billing_address?.address_2,
            shipping_city: order?.billing_address?.city,
            shipping_province: order?.billing_address?.province,
            shipping_contact: order?.billing_address?.phone,
            items: order?.items?.map((item)=>{
                return {
                    title: item.product_title,
                    quantity: item.quantity,
                    price: item.unit_price
                }
            }),
            total_amount: order_transaction[0]?.amount
        },
		attachments: [],
	});
}

export const config: SubscriberConfig = {
	event: "order.placed",
	// event: "product.updated",
};
