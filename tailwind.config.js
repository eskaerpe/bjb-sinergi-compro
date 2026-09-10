/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#091A2E',
          900: '#0F2A47',
          800: '#16365C',
          700: '#1F4879',
          600: '#2A5C99',
          100: '#E6EEF8',
          50: '#F0F5FA',
        },
        brandBlue: {
          500: '#007CAB',
          600: '#00648A',
          100: '#E0F2FE',
          50: '#F0F9FF',
        },
        coral: {
          500: '#FB6040',
          600: '#E04B2C',
          100: '#FFEDEA',
          50: '#FFF5F3',
        },
        surface: {
          white: '#FFFFFF',
          tint: '#F3F6FA',
          muted: '#F8FAFC',
          dark: '#0A1D33',
        },
        border: {
          subtle: '#E2E8F0',
          medium: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(15, 42, 71, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(15, 42, 71, 0.15)',
        'nav': '0 4px 20px -2px rgba(15, 42, 71, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
