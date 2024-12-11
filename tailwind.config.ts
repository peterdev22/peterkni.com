import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 20px))' },
        }
      }
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'serif': ['Aleo', 'serif'],
    },
  },

  plugins: []
} satisfies Config;
