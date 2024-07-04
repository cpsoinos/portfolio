import { text, uniqueIndex, blob, sqliteTable } from 'drizzle-orm/sqlite-core';
import type { Link } from '$lib/types';
import { id, timestamps } from './utils/common';

export const users = sqliteTable(
	'users',
	{
		id,
		...timestamps,
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
