/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	variants: {
		transform:['responsive','hover','focus','group-hover'],
		filter:['responsive','hover','focus','group-hover'],
		dropShadow:['responsive','hover','focus','group-hover'],
		scale:['responsive','hover','focus','group-hover'],
		extend: {
		  display: ["group-hover"],
		  visibility: ["group-hover"],
	  },
	  },
	plugins: [],
}