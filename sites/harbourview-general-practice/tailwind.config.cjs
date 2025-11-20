/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Wellness Catalyst v2.0 Custom Colors
        'catalyst-purple': '#8B5CF6',    // Primary - violet-500
        'reaction-coral': '#FF6B6B',     // Accent 1 - red-400 equivalent
        'breakthrough-yellow': '#FFD93D', // Accent 2 - yellow-400 equivalent
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Using Inter as display font (Playfair/Syne optional later)
      },
    },
  },
  plugins: [],
}
