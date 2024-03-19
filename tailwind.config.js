/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: ['"Source Sans"', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
