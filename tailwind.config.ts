import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      // Deebaj Royal Brand Colors (Brown Honey)
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      colors: {
        // Backgrounds
        cream: {
          DEFAULT: '#FBF7EF',
          soft: '#F4E9D8',
          warm: '#EFE1C8',
        },
        // Brand Primary (Luxury Honey Beige)
        honey: {
          DEFAULT: '#B58A56',
          dark: '#9C7548',
          deep: '#6E4A2E',
          mute: '#C3A173',
        },
        caramel: {
          DEFAULT: '#A97B4F',
          soft: '#C69D6B',
          deep: '#7A5437',
        },
        // Brand Accent (Muted Champagne Gold)
        gold: {
          DEFAULT: '#CBB88A',
          deep: '#A9915B',
          light: '#E2D0A5',
          pale: '#F3E8CE',
        },
        champagne: {
          DEFAULT: '#E9D9B7',
          pale: '#F7EEDB',
          warm: '#D7BC82',
        },
        // Text
        ink: {
          DEFAULT: '#33261C',
          soft: '#6E5643',
          mute: '#9A8268',
        },
        // Neutrals
        sand: {
          100: '#F3EBDC',
          200: '#E7DAC4',
          300: '#CDBB9F',
          500: '#A58F70',
          700: '#755439',
        },
      },
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      // Typography
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      fontFamily: {
        // Arabic
        arabic: ['var(--font-arabic)', 'system-ui', 'sans-serif'],
        // English Serif (luxury)
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // English Sans
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Logo
        logo: ['var(--font-cinzel)', 'serif'],
      },
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      // Spacing & Layout
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      // Animations
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      // Gradients
      // ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
      backgroundImage: {
        'honey-gradient':
          'linear-gradient(135deg, #F7EEDB 0%, #E9D9B7 46%, #C69D6B 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #F3E8CE 0%, #CBB88A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
