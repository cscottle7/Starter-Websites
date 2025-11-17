/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2D2D2D',      // Charcoal - sophisticated and refined
        'primary-focus': '#1a1a1a', // Darker charcoal for hover states
        secondary: '#8B9D83',    // Sage green - calm and elegant
        accent: '#C9A863',       // Muted gold - luxury
        neutral: '#4b5563',      // Medium gray
        'base-100': '#ffffff',   // White background
        'base-200': '#f9fafb',   // Very light gray
        'base-300': '#e5e7eb',   // Light gray borders
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'archetype': '0.5rem', // Subtle rounds for Elegant archetype
      },
      boxShadow: {
        'archetype': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // Subtle shadow
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        elegant: {
          "primary": "#2D2D2D",
          "primary-focus": "#1a1a1a",
          "primary-content": "#ffffff",
          "secondary": "#8B9D83",
          "secondary-focus": "#778a6f",
          "secondary-content": "#ffffff",
          "accent": "#C9A863",
          "accent-focus": "#b89654",
          "accent-content": "#1a202c",
          "neutral": "#4b5563",
          "neutral-focus": "#374151",
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
