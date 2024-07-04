import { text, blob, sqliteTable } from 'drizzle-orm/sqlite-core';
import type { Link } from '$lib/types';
import { id, timestamps } from './utils/common';
import { userReference } from './utils/userReference';

export const jobs = sqliteTable('jobs', {
	id,
	...timestamps,
	...userReference,
	company: text('company').notNull(),
	website: blob('website').$type<Link>(),
	location: text('location').notNull(),
	title: text('title').notNull(),
	startDate: text('start_date').notNull().$type<Date>(),
	endDate: text('end_date').$type<Date>(),
	summary: text('summary')
});

export type Job = typeof jobs.$inferSelect; // return type when queried
export type InsertJob = typeof jobs.$inferInsert; // insert type
