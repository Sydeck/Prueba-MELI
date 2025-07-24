// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // MercadoLibre Exact Colors (ColorZilla extraction)
      colors: {
        // ML Brand Colors
        'ml-magenta': '#BA0095', // Primary magenta
        'ml-blue': {
          dark: '#2968C8', // Dark blue
          main: '#3483FA', // Main ML Blue
          light: '#4189E6', // Light blue
        },
        'ml-green': '#00A650', // Success green

        // ML Neutrals
        'ml-black': '#0F1111', // Main text
        'ml-gray': {
          dark: '#565959', // Secondary text
          light: '#D5D9D9', // Borders
          body: '#EDEDED', // Body background
          nav: '#F5F5F5', // Nav/footer background
          surface: '#F7FAFA', // Card background
        },

        // ML Thermometer Levels (Urgency)
        'ml-thermo': {
          1: '#F23D4F', // Critical (stock bajo)
          2: '#FF7733', // Urgent (tiempo limitado)
          3: '#FFE600', // Warning (header nav)
          4: '#AADB1E', // Normal/OK
        },

        // Override Tailwind defaults with ML
        primary: {
          500: '#3483FA', // Main ML Blue
          600: '#2968C8', // Dark ML Blue
          700: '#2968C8',
        },

        gray: {
          900: '#0F1111', // ML Black
          600: '#565959', // ML Dark Gray
          300: '#D5D9D9', // ML Light Gray
          100: '#F5F5F5', // ML Nav Gray
          50: '#F7FAFA', // ML Surface
        },
      },

      // ML Background Colors
      backgroundColor: {
        body: '#EDEDED', // Body background
        nav: '#F5F5F5', // Navigation background
      },

      // ML Typography
      fontFamily: {
        ml: [
          'Proxima Nova',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },

      // ML Component Heights
      height: {
        'ml-button': '40px',
        'ml-button-lg': '48px',
        'ml-input': '40px',
      },

      // ML Border Radius
      borderRadius: {
        ml: '6px', // ML standard radius
        'ml-lg': '8px', // ML cards
      },

      // ML Shadows
      boxShadow: {
        ml: '0 2px 4px rgba(0, 0, 0, 0.1)',
        'ml-lg': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'ml-hover': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },

      // ML Breakpoints
      screens: {
        xs: '475px',
        'ml-md': '900px',
        'ml-lg': '1200px',
      },
    },
  },
  plugins: [],
};
