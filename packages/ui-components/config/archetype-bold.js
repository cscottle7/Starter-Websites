/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',      // Deep navy - trust and authority
        'primary-focus': '#051220', // Darker navy for hover states
        secondary: '#FF6B35',    // Electric orange - energy and innovation
        accent: '#FFD700',       // Gold - premium quality
        neutral: '#1f2937',      // Dark gray
        'base-100': '#ffffff',   // White background
        'base-200': '#f9fafb',   // Light gray background
        'base-300': '#e5e7eb',   // Border gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      borderRadius: {
        'archetype': '0.25rem', // Sharp edges for Bold archetype
      },
      boxShadow: {
        'archetype': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // Elevated shadow
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        bold: {
          "primary": "#0A2540",
          "primary-focus": "#051220",
          "primary-content": "#ffffff",
          "secondary": "#FF6B35",
          "secondary-focus": "#e85a2a",
          "secondary-content": "#ffffff",
          "accent": "#FFD700",
          "accent-focus": "#e6c200",
          "accent-content": "#1a202c",
          "neutral": "#1f2937",
          "neutral-focus": "#111827",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e5e7eb",
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
