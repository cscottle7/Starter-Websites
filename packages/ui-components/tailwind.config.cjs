/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // Base theme - clients override with archetype-specific configs
        base: {
          "primary": "#1a202c",
          "secondary": "#2d3748",
          "accent": "#4a5568",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#f7fafc",
          "base-300": "#e2e8f0",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    // Enable only essential DaisyUI features
    base: true,
    styled: true,
    utils: true,
  },
};
