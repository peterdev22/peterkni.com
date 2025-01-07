import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontFamily: {
      "sans": ["DM Sans", "sans-serif"],
      "title": ["Outfit", "sans-serif"],
      "serif": ["serif"],
    },
  },

  plugins: [],
} satisfies Config;
