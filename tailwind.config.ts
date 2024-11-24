import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '414px',
      sm: '640px',
      md: '720px',
      lg: '1000px',
      // 'lg-max': { max: '960px' },
      xl: '1140px',
      '2xl': '1440px',
      '3xl': '1441px',
      '4xl': '2000px',
    },
    extend: {
      fontFamily: {
        instrumentsans: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          100: '#101619',
          200: '#3B3F3F',
          300: '#565E5D',
          400: '#454A4A',
          500: '#B0B6B5',
        },
        secondary: {
          100: '#0E80BB',
        },
        'button-bg': '#0C6291',
        'nav-bg': '#F3F8F8',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '7rem',
          xl: '7rem',
          '2xl': '7rem',
        },
        center: true,
      },
      backgroundImage: {
        'custom-gradient-1':
          'linear-gradient(180deg, rgba(204, 222, 235, 0.8) 0%, #E2F2FC 15%, #FFFFFF 100%)',
        'custom-gradient-2':
          'linear-gradient(180deg, #FFFFFF 0%, #E2F2FC 85%, rgba(204, 222, 235, 0.8) 100%)',
        'bos-banner': "url('/images/bos-banner.svg')",
        'pattern-top': "url('/icons/bg-pattern-top.svg')",
        'pattern-bottom': "url('/icons/bg-pattern-bottom.svg')",
        'footer-icon': "url('/icons/footer-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
