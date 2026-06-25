import type { Config } from 'tailwindcss';

/**
 * The visual design is driven by exact inline styles (ported 1:1 from the
 * approved Claude Design version) plus the keyframes/breakpoints in
 * app/globals.css. Tailwind is wired up for utility usage and exposes the
 * brand tokens below so future additions stay on-palette.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF5A1F',
          light: '#FF7A2E',
          soft: '#FF8A4D',
        },
        ink: '#15140F',
        cream: '#F4F1EC',
        night: '#0E0E10',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg,#FF7A2E,#FF5A1F)',
      },
    },
  },
  plugins: [],
};

export default config;
