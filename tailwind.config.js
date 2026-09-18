// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        alodo: {
          black: '#0a0a0a',
          white: '#fafafa',
          'pure-white': '#ffffff',
          primary: {
            DEFAULT: '#ec663b', // Orange ALODO principal
            hover: '#d4562e',   // primary-600
            light: '#fff2ef',   // primary-50
          },
          teal: {
            DEFAULT: '#00c2a8', // Vert/Teal ALODO
            light: '#e5faf6',   // teal-50
          },
          grey: {
            50: '#f2f2f2',
            100: '#ebebeb',
            300: '#d1d1d6',
            500: '#6e6e73',
            700: '#3a3a3c',
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        tech: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'alodo-sm': '8px',   // --r-sm
        'alodo-md': '12px',  // --r-md
        'alodo-lg': '20px',  // --r-lg
        'alodo-xl': '28px',  // --r-xl
      },
      boxShadow: {
        'alodo-sm': '0 1px 2px #0a0a0a0a, 0 2px 8px #0a0a0a0a',
        'alodo-md': '0 6px 24px #0a0a0a0f, 0 2px 6px #0a0a0a0a',
        'alodo-lg': '0 24px 60px #0a0a0a1a, 0 8px 24px #0a0a0a0f',
      }
    },
  },
  plugins: [],
}