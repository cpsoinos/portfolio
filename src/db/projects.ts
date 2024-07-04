import { text, blob, sqliteTable } from 'drizzle-orm/sqlite-core';
import type { Link } from '$lib/types';
import { id, timestamps } from './utils/common';
import { userReference } from './utils/userReference';

export const projects = sqliteTable('projects', {
	id,
	...timestamps,
	...userReference,
	title: text('title').notNull(),
	links: blob('links').$type<Link[]>(),
	description: text('description'),
	summary: text('summary')
});

export type Project = typeof projects.$inferSelect; // return type when queried
export type InsertProject = typeof projects.$inferInsert; // insert type
