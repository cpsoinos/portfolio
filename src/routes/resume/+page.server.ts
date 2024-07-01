import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { drizzle } from 'drizzle-orm/d1';
import { users } from '$db/users';

export const load: PageServerLoad = async ({ platform }) => {
	const db = drizzle(platform!.env.DB);
	const result = await db.select().from(users).all();
	// let result = await platform?.env.DB.prepare('SELECT * FROM users LIMIT 5').run();
	// const post = await getPostFromDatabase(params.slug);
	// console.log(JSON.stringify(result));
	console.log(result);

	// if (post) {
	// 	return post;
	// }
	error(404, 'Not found');
};
