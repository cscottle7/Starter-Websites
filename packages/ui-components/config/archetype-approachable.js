/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#E07856',      // Terracotta - warm and inviting
        'primary-focus': '#d06542', // Darker terracotta for hover states
        secondary: '#F5E6D3',    // Cream - soft and gentle
        accent: '#A8DADC',       // Soft teal - friendly accent
        neutral: '#6b7280',      // Medium gray
        'base-100': '#ffffff',   // White background
        'base-200': '#fef3f0',   // Warm off-white
        'base-300': '#f5e6d3',   // Cream borders
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        heading: ['Nunito', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'archetype': '9999px', // Fully rounded for Approachable archetype
      },
      boxShadow: {
        'archetype': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Soft shadow
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '20': '5rem',     // 80px
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        approachable: {
          "primary": "#E07856",
          "primary-focus": "#d06542",
          "primary-content": "#ffffff",
          "secondary": "#F5E6D3",
          "secondary-focus": "#e6d4bf",
          "secondary-content": "#1a202c",
          "accent": "#A8DADC",
          "accent-focus": "#91c9cc",
          "accent-content": "#1a202c",
          "neutral": "#6b7280",
          "neutral-focus": "#4b5563",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#fef3f0",
          "base-300": "#f5e6d3",
          "base-content": "#1a202c",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
};
