module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			gray: {
				50: '#E4E4E5',
				100: '#E4E4E5',
				200: '#E4E4E5',
				300: '#E4E4E5',
				400: '#E4E4E5',
				500: '#E4E4E5',
			},
			blue: {
				50: '#304473',
				100: '#304473',
				200: '#304473',
				300: '#304473',
				400: '#304473',
				500: '#304473',
			},
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0px -2px 2px -1px rgba(0, 0, 0, 0.10)',
			none: 'none',
			sideNav: '2px 0px 4px rgba(0, 0, 0, 0.16)',
			sideBtn: 'inset 0px 6px 10px rgba(0, 0, 0, 0.16);',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
