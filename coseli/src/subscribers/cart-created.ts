import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import { INotificationModuleService } from "@medusajs/framework/types";

export default async function cartCraetedHandler({
	event: { data },
	container,
}: SubscriberArgs<{ id: string }>) {
	const notificationModuleService: INotificationModuleService =
		container.resolve(Modules.NOTIFICATION);
	console.error(data);

	// @ts-ignore
	await notificationModuleService.createNotifications({
		to: "arunkp1122@gmail.com",
		from: "no-reply@coselinepal.com", // Optional var, verified sender required
		channel: "email",
		template: "d-2e58cbd20ce841b5ab93e2e789b37ef5",
		data,
		attachments: [],
	});
}

export const config: SubscriberConfig = {
	event: "region.updated",
};
