const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['var(--montserrat-font)', fontFamily.sans],
			},
		},
	},
	plugins: [],
	/* prefix: 'tw-', */
	important: true,
};
