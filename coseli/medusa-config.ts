import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
	admin: {
		disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
		backendUrl: process.env.MEDUSA_BACKEND_URL,
	},
	projectConfig: {
		workerMode: process.env.MEDUSA_WORKER_MODE as
			| "shared"
			| "worker"
			| "server",

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
		// {
		// 	resolve: "@medusajs/medusa/file",
		// 	options: {
		// 		providers: [
		// 			{
		// 				resolve: "@medusajs/medusa/file-local",
		// 				id: "local",
		// 				options: {
		// 					// provider options...
		// 				},
		// 			},
		// 		],
		// 	},
		// },
		{
			resolve: "@medusajs/medusa/file",
			options: {
				providers: [
					{
						resolve: "@medusajs/medusa/file-s3",
						id: "s3",
						options: {
							file_url: process.env.S3_FILE_URL,
							access_key_id: process.env.S3_ACCESS_KEY_ID,
							secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
							region: process.env.S3_REGION,
							bucket: process.env.S3_BUCKET,
							endpoint: process.env.S3_ENDPOINT,
							// other options...
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
