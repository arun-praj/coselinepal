import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
	projectConfig: {
		databaseUrl: process.env.DATABASE_URL,
		http: {
			storeCors: process.env.STORE_CORS!,
			adminCors: process.env.ADMIN_CORS!,
			authCors: process.env.AUTH_CORS!,
			jwtSecret: process.env.JWT_SECRET,
			cookieSecret: process.env.COOKIE_SECRET,
		},
		redisUrl: process.env.REDIS_URL,
	},
	modules: [
		// Khlati payment provider
		{
			resolve: "@medusajs/medusa/payment",
			options: {
				providers: [
					{
						resolve: "./src/modules/khalti-payment",
						id: "khalti-payment",
						options: {
							// provider options...
						},
					},
				],
			},
		},
		// Notification provider
		{
			resolve: "@medusajs/medusa/notification",
			options: {
				providers: [
					// Sendgrid
					{
						resolve: "@medusajs/medusa/notification-sendgrid",
						id: "sendgrid",
						options: {
							channels: ["email"],
							api_key: process.env.SENDGRID_API_KEY,
							from: process.env.SENDGRID_FROM,
						},
					},
					{
						resolve: "@medusajs/medusa/notification-local",
						id: "local",
						options: {
							name: "Local Notification Provider",
							channels: ["feed"],
						},
					},

					//custom notification provider
					// {
					// 	resolve: "./src/modules/my-notification",
					// 	id: "my-notification",
					// 	options: {
					// 		channels: ["feed"],
					// 		api_key:
					// 			process.env.MY_NOTIFICATION_API ||
					// 			"asdfasdfasdfasdf",
					// 		// provider options...
					// 	},
					// },
				],
			},
		},

		// local storage, uploaded to upload folder
		{
			resolve: "@medusajs/medusa/file",
			options: {
				providers: [
					{
						resolve: "@medusajs/medusa/file-local",
						id: "local",
						options: {
							// provider options...
						},
					},
				],
			},
		},

		// These three are redis for prod
		{
			resolve: "@medusajs/medusa/cache-redis",
			options: {
				redisUrl: process.env.REDIS_URL,
			},
		},
		{
			resolve: "@medusajs/medusa/event-bus-redis",
			options: {
				redisUrl: process.env.REDIS_URL,
			},
		},
		{
			resolve: "@medusajs/medusa/workflow-engine-redis",
			options: {
				redis: {
					url: process.env.REDIS_URL,
				},
			},
		},
	],
});
