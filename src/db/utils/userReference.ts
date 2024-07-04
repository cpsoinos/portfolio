/* eslint-disable @dword-design/import-alias/prefer-alias */
import { users } from '../users';
import { text } from 'drizzle-orm/sqlite-core';

export const userReference = {
	userId: text('user_id')
		.references(() => users.id)
		.notNull()
};
