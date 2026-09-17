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
          950: '#0F2C54',
          900: '#1A4886', // Primary Biru Tua (Base)
          800: '#163F75',
          700: '#23579D',
          600: '#2E6BBF',
          100: '#E5EEF9',
          50: '#F0F5FC',
        },
        brandBlue: {
          600: '#237298',
          500: '#2D8CBA', // Secondary Biru Muda (Base)
          400: '#50A4CB',
          100: '#DCF0F9',
          50: '#EDF7FC',
        },
        coral: {
          600: '#E08C3B',
          500: '#FEA959', // Aksen Kuning / Gold (Base)
          400: '#FEB975',
          100: '#FFF1E3',
          50: '#FFF8F0',
        },
        surface: {
          white: '#FFFFFF',
          tint: '#F3F7FB',
          muted: '#F8FAFC',
          dark: '#0F2C54',
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
        'card': '0 10px 30px -5px rgba(26, 72, 134, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(26, 72, 134, 0.16)',
        'nav': '0 4px 20px -2px rgba(26, 72, 134, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
