/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Same "Toker Baddie" tokens as the configurator (src/tailwind.config.js
      // one level up) — kept in sync by hand since these are two separate Vite
      // apps/repos. The rendered FRAME preview lives only in the configurator;
      // this site never renders a customer's actual product, so that caveat
      // doesn't apply here.
      colors: {
        page: '#F8EFE5',
        card: '#FFFFFF',
        soft: '#EFE6D8',
        sage: '#DCEAE0',
        blush: '#F0D9C4',
        line: '#E9DDC8',
        rail: '#8A7C6C',
        ink: {
          DEFAULT: '#241A20',
          sec: '#4A4039',
          muted: '#6B5F54',
        },
        brand: '#126B42',
        primary: {
          DEFAULT: '#F0B731',
          hover: '#D49A1F',
        },
        violet: '#4B1E78',
        selected: '#C01C76',
        promo: '#C7F04D',
        error: '#B3261E',
        warning: '#8A5200',
        info: '#006181',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(36,26,32,0.06)',
        lift: '0 14px 30px -16px rgba(36,26,32,0.35)',
      },
    },
  },
  plugins: [],
}
