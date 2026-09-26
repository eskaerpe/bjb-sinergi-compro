/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct Semantic 9-Color Palette
        primaryNavy: '#0B1F3A',
        secondaryNavy: '#142F52',
        elevatedCard: '#19385E',
        brandGold: {
          DEFAULT: '#D9A441',
          50: '#FDF9EE',
          100: '#FAEDCE',
          200: '#F5DDA7',
          300: '#F0CE88',
          400: '#E7BE69', // Soft Gold
          500: '#D9A441', // Brand Gold
          600: '#C29135',
          700: '#A37827',
          800: '#84601D',
          900: '#684B15',
          soft: '#E7BE69',
        },
        softGold: '#E7BE69',
        offWhite: '#F7F8FA',
        lightBorder: '#DCE3EC',
        primaryText: '#172B4D',
        mutedText: '#65758B',

        // Extended theme mappings for backwards & component compatibility
        navy: {
          950: '#071527',
          900: '#0B1F3A', // Primary Navy
          800: '#142F52', // Secondary Navy
          700: '#19385E', // Elevated Card
          600: '#224978',
          500: '#2F639E',
          400: '#5082BE',
          300: '#8BAFD9',
          200: '#DCE3EC', // Light Border
          100: '#EBF0F6',
          50: '#F7F8FA',  // Off White
        },
        brandBlue: {
          50: '#FDF9EE',
          100: '#FAEDCE',
          200: '#F5DDA7',
          300: '#F0CE88',
          400: '#E7BE69', // Soft Gold
          500: '#D9A441', // Brand Gold
          600: '#C29135',
          700: '#A37827',
          800: '#142F52', // Secondary Navy
          900: '#0B1F3A', // Primary Navy
          950: '#071527',
          DEFAULT: '#D9A441',
        },
        coral: {
          50: '#FDF9EE',
          100: '#FAEDCE',
          200: '#F5DDA7',
          300: '#F0CE88',
          400: '#E7BE69', // Soft Gold
          500: '#D9A441', // Brand Gold
          600: '#C29135',
          700: '#A37827',
          DEFAULT: '#D9A441',
        },
        surface: {
          dark: '#0B1F3A',      // Primary Navy
          card: '#19385E',      // Elevated Card
          cardHover: '#1f4472',
          tint: '#F7F8FA',      // Off White
          white: '#ffffff',
          muted: '#F7F8FA',     // Off White
        },
        border: {
          dark: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(255, 255, 255, 0.12)',
          cardHover: 'rgba(255, 255, 255, 0.2)',
          subtle: '#DCE3EC',    // Light Border
          medium: '#DCE3EC',    // Light Border
        },
        slate: {
          50: '#F7F8FA',       // Off White
          100: '#EEF2F6',
          200: '#DCE3EC',      // Light Border
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#65758B',      // Muted Text
          600: '#65758B',      // Muted Text
          700: '#334155',
          800: '#1E293B',
          900: '#172B4D',      // Primary Text
          950: '#0B1F3A',      // Primary Navy
        },
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 31, 58, 0.05), 0 2px 6px -1px rgba(11, 31, 58, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(11, 31, 58, 0.1), 0 8px 10px -6px rgba(11, 31, 58, 0.04)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
