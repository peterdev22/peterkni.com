/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'rosewater': '#f5e0dc',
      'flamingo': '#f2cdcd',
      'pink': '#f5c2e7',
      'mauve': '#cba6f7',
      'red': '#f38ba8',
      'maroon': '#eba0ac',
      'peach': '#fab387',
      'peach-dark': '#D2926D',
      'yellow': '#f9e2af',
      'green': '#a6e3a1',
      'teal': '#94e2d5',
      'sky': '#89dceb',
      'sapphire': '#74c7ec',
      'blue': '#89b4fa',
      'blue-dark': '#25263B',
      'lavender': '#b4befe',
      'text': '#cdd6f4',
      'subtext-1': '#bac2de',
      'subtext-0': '#a6adc8',
      'overlay-2': '#9399b2',
      'overlay-1': '#7f849c',
      'overlay-0': '#6c7086',
      'surface-2': '#585b70',
      'surface-1': '#45475a',
      'surface-0': '#313244',
      'core': '#1e1e2e',
      'mantle': '#181825',
      'crust': '#11111b',
    },
    fontFamily: {
      'body': ['JetBrainsMono', 'sans-serif']
    },
    extend: {
      keyframes: {
        zoomFadeIn: {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0' 
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        zoomFadeIn: 'zoomFadeIn 1s forwards',
        zoomFadeInDelay: 'zoomFadeIn 1s forwards 0.2s',
      }
    },
  },
  plugins: [],
}

