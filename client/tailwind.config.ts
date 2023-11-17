import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundColor: {
				midnight: '#000C2A',
				blue: '#1C3169',
				cyan: '#495A87',
				teal: '#616F96'
			}
		}
	},
	plugins: []
}
export default config
