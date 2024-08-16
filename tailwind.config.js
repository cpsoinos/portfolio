/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Economica', 'sans-serif'],
			body: ['Arial Narrow', 'Arial', 'sans-serif'],
			mono: ['Roboto Mono', 'monospace']
		},
		extend: {
			fontSize: {
				'2xs': '.625rem'
			}
		}
	},
	plugins: []
};
