import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'serif': ['Aleo', 'serif'],
    },
  },

  plugins: []
} satisfies Config;
