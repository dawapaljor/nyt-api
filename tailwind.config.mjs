/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                "lato": ['Lato', 'sans-serif'],
				"jersey": ['Jersey 15','sans-serif']
            }
		},
	},
	plugins: [],
}
