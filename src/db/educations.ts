import { text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { id, timestamps } from './utils/common';
import { userReference } from './utils/userReference';

export const educations = sqliteTable('educations', {
	id,
	...timestamps,
	...userReference,
	university: text('university'),
	school: text('school').notNull(),
	degree: text('degree'),
	startDate: text('start_date').notNull().$type<Date>(),
	endDate: text('end_date').$type<Date>()
});

export type Education = typeof educations.$inferSelect; // return type when queried
export type InsertEducation = typeof educations.$inferInsert; // insert type
