import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/db/*.ts',
	out: './drizzle',
	dialect: 'sqlite', // 'postgresql' | 'mysql' | 'sqlite'
	driver: 'd1-http',
	dbCredentials: {
		accountId: '62dd6e6f44a50c62d4ad76a0122f5a3c',
		databaseId: '41738044-91b9-4eb8-871a-10ee345e9108',
		token: 'op://Private/Cloudflare D1 Edit Token/credential'
	}
});
