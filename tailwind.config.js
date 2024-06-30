/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Economica', 'sans-serif']
		},
		extend: {
			fontSize: {
				'2xs': '.625rem'
			}
		}
	},
	plugins: []
};
