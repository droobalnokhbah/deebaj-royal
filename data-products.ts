import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ════════════════════════════════════════
      // Deebaj Royal Brand Colors (Brown Honey)
      // ════════════════════════════════════════
      colors: {
        // Backgrounds
        cream: {
          DEFAULT: '#FCF8EE',
          soft: '#F7EFD5',
          warm: '#FAF4E2',
        },
        // Brand Primary (Brown Honey)
        honey: {
          DEFAULT: '#906820',
          dark: '#7A5818',
          deep: '#5C3E10',
          mute: '#A07830',
        },
        // Brand Accent (Gold)
        gold: {
          DEFAULT: '#C9A368',
          deep: '#A8854E',
          light: '#E5C896',
          pale: '#F0DEB0',
        },
        // Text
        ink: {
          DEFAULT: '#3D2614',
          soft: '#6B4720',
          mute: '#9B7E5F',
        },
        // Neutrals
        sand: {
          100: '#F0EAD8',
          200: '#E5DCC4',
          300: '#C9BFA5',
          500: '#A89578',
          700: '#7A5818',
        },
      },
      // ════════════════════════════════════════
      // Typography
      // ════════════════════════════════════════
      fontFamily: {
        // Arabic
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        // English Serif (luxury)
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // English Sans
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        // Logo
        logo: ['Cinzel', 'serif'],
      },
      // ════════════════════════════════════════
      // Spacing & Layout
      // ════════════════════════════════════════
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // ════════════════════════════════════════
      // Animations
      // ════════════════════════════════════════
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
      // ════════════════════════════════════════
      // Gradients
      // ════════════════════════════════════════
      backgroundImage: {
        'honey-gradient':
          'linear-gradient(135deg, #906820 0%, #7A5818 50%, #5C3E10 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #E5C896 0%, #C9A368 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
