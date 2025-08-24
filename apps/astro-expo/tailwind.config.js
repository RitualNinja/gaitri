/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				devanagari: ["TiroDevanagariSanskrit-Regular", "serif"],
				"devanagari-italic": ["TiroDevanagariSanskrit-Italic", "serif"],
			},
		},
	},
	plugins: [],
};