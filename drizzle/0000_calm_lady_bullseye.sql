CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`location` text,
	`summary` text,
	`links` blob
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);