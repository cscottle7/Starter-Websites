/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from Dr. Nguyen style guide
        'marian-blue': '#424189',      // Primary accent, buttons, section backgrounds
        'vista-blue': '#7E9BC5',       // Secondary accent
        'space-cadet': '#262558',      // Heading text, dark sections
        'alice-blue': '#ECF2FB',       // Light section backgrounds
        'columbia-blue': '#C6D7EE',    // Outlines, strokes, text backgrounds

        // Neutral colors
        'dim-gray': '#5F5F74',         // Body text color
        'isabelline': '#FBF7F3',       // Warm section backgrounds
        'almond': '#EADFD4',           // Warm outlines/strokes

        // Semantic color mappings
        primary: '#424189',            // Marian Blue
        secondary: '#7E9BC5',          // Vista Blue
        accent: '#424189',             // Marian Blue for CTAs
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        heading: ['DM Serif Text', 'Georgia', 'serif'],
      },
      fontSize: {
        // Typography scale from style guide
        'h1': ['64px', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['36px', { lineHeight: '1.2', fontWeight: '400' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '400' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1440px',  // Max content width from requirements
      },
      spacing: {
        'container': '1440px',
      },
    },
  },
  plugins: [],
};
