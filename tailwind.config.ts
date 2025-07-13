export default {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			heading: "IBM Plex Sans",
			sans: "Inter",
			mono: "JetBrains Mono",
		},
		extend: {
			colors: {
				transparent: "transparent",
				currentColor: "currentColor",
			}
		},
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1536px",
		},
	},
}