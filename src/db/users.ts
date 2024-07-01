import { sql } from 'drizzle-orm';
import { text, uniqueIndex, blob, sqliteTable } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';

type Link = {
	href: string;
	text: string;
	icon?: string;
};

export const users = sqliteTable(
	'users',
	{
		id: text('id')
			.primaryKey()
			.$defaultFn(() => createId()),
		createdAt: text('created_at')
			.notNull()
			.default(sql`(CURRENT_TIMESTAMP)`)
			.$type<Date>(),
		updatedAt: text('updated_at')
			.notNull()
			.default(sql`(CURRENT_TIMESTAMP)`)
			.$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
			.$type<Date>(),
		name: text('name').notNull(),
		email: text('email').notNull(),
		phone: text('phone'),
		location: text('location'),
		summary: text('summary'),
		links: blob('links').$type<Link[]>()
	},
	(table) => {
		return {
			emailIdx: uniqueIndex('email_idx').on(table.email)
		};
	}
);

export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type
