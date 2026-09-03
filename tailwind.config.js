/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'anchor-navy': {
          DEFAULT: '#1C3A4B',
          dark: '#122733',
          light: '#2E5266',
        },
        'grain-gold': {
          DEFAULT: '#C89A3E',
          dark: '#A47D2E',
          light: '#E0B968',
        },
        'pasture-green': {
          DEFAULT: '#4B6B4E',
          dark: '#38513A',
          light: '#6C8F6F',
        },
        limestone: {
          DEFAULT: '#E7E7DF',
          dark: '#D8D8CC',
        },
        slate: {
          DEFAULT: '#83807A',
          light: '#ABA8A1',
        },
        ink: '#1F2421',
        paper: '#FBFBF8',
        danger: '#A6432E',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Zilla Slab"', 'Georgia', 'serif'],
        body: ['"Public Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1' }],
        h1: ['2.5rem', { lineHeight: '1.2' }],
        h2: ['2rem', { lineHeight: '1.2' }],
        h3: ['1.5rem', { lineHeight: '1.3' }],
        h4: ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        micro: ['0.8125rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        sharp: '0px',
        sm: '2px',
        md: '4px',
      },
      transitionDuration: {
        fast: '120ms',
        standard: '200ms',
      },
      boxShadow: {
        float: '0 6px 20px rgba(28, 58, 75, 0.25)',
      },
      maxWidth: {
        measure: '68ch',
      },
    },
  },
  plugins: [],
}
