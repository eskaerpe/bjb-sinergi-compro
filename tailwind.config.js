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
          950: '#0B1F3A',
          900: '#1B365D', // Primary Biru Tua (Official Base)
          800: '#162F52',
          700: '#1E4070',
          600: '#254E86',
          400: '#4A72A4',
          100: '#E6EDF5',
          50: '#F1F5F9',
        },
        brandBlue: {
          600: '#1D628B',
          500: '#257FA8', // Secondary Biru Muda (Base)
          400: '#3A9AC4',
          100: '#DDEEF7',
          50: '#F0F7FB',
        },
        coral: {
          600: '#B45309', // High-contrast Amber / Coral Dark
          500: '#D97706', // Primary Accent Amber / Gold (Base)
          400: '#F59E0B', // Amber Light
          100: '#FEF3C7', // Amber Tint
          50: '#FFFBEB',
        },
        surface: {
          white: '#FFFFFF',
          tint: '#F3F7FB',
          muted: '#F8FAFC',
          dark: '#0B1F3A',
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
        'card': '0 10px 30px -5px rgba(27, 54, 93, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(27, 54, 93, 0.16)',
        'nav': '0 4px 20px -2px rgba(27, 54, 93, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
