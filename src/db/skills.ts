import { text, blob, sqliteTable } from 'drizzle-orm/sqlite-core';
import { id, timestamps } from './utils/common';
import { userReference } from './utils/userReference';

export const skills = sqliteTable('skills', {
	id,
	...timestamps,
	...userReference,
	category: text('category').notNull(),
	items: blob('items').$type<string[]>()
});

export type Skill = typeof skills.$inferSelect; // return type when queried
export type InsertSkill = typeof skills.$inferInsert; // insert type
