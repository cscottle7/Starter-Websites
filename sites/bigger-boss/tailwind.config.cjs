/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Softened Bold Color Palette - Precision Engine Metaphor
      colors: {
        // Primary Navy (Engine Casing)
        navy: {
          dark: '#0F2C59',      // Primary brand navy
          darker: '#0A1F3F',    // Gradient depth, footer
          light: '#1A3A6B',     // Hover states, emphasis
        },
        // Muted Orange (Controlled Energy)
        orange: {
          muted: '#D97642',     // Primary CTAs, metrics
          light: '#E68B5C',     // Hover states, lighter accents
          dark: '#C55E2C',      // Pressed states, darker emphasis
        },
        // Supporting Blue (Innovation)
        blue: {
          vibrant: '#2E8BC0',   // Secondary CTAs, links
          light: '#4A9FD0',     // Hover states
          dark: '#1F6B9A',      // Emphasis
        },
        // Validation Green (Quality Scores)
        green: {
          success: '#36D399',   // Quality badges, checkmarks
        },
        // Neutral Palette
        text: {
          primary: '#1A202C',   // Main body text
          secondary: '#4A5568', // Secondary content, captions
          tertiary: '#718096',  // Subtle text, disabled states
        },
        border: {
          DEFAULT: '#E2E8F0',   // Card borders, dividers
          light: '#EDF2F7',     // Subtle borders
        },
        bg: {
          primary: '#FFFFFF',   // Main background
          secondary: '#F7FAFC', // Section alternation
          tertiary: '#EDF2F7',  // Card backgrounds
        },
        // Feedback Colors
        feedback: {
          success: '#36D399',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },

      // Gradient Utilities
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0F2C59 0%, #0A1F3F 100%)',
        'gradient-navy-soft': 'linear-gradient(180deg, #0F2C59 0%, #1A3A6B 100%)',
      },

      // Softened Bold Typography Scale
      fontSize: {
        // Headlines
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],     // 56px
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],     // 40px
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '700' }],         // 30px
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],                               // 24px
        'h5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],                              // 20px
        'h6': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '700' }],    // 14px
        // Body Text
        'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],   // 20px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],         // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],  // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],   // 12px
        // Interactive
        'btn-primary': ['1.125rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],    // 18px
        'btn-secondary': ['1rem', { lineHeight: '1', fontWeight: '600' }],                               // 16px
        // Metrics
        'metric-hero': ['3rem', { lineHeight: '1.0', fontWeight: '800' }],     // 48px
        'metric-card': ['2rem', { lineHeight: '1.0', fontWeight: '800' }],     // 32px
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['IBM Plex Serif', 'Georgia', 'serif'],
      },

      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      // Softened Bold Border Radius (Machined Precision)
      borderRadius: {
        btn: '0.375rem',      // 6px - Buttons/CTAs
        card: '0.5rem',       // 8px - Cards
        container: '0.75rem', // 12px - Large containers
        full: '9999px',       // Circles
      },

      // Subtle Professional Shadows (Technical Depth)
      boxShadow: {
        subtle: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        hover: '0 4px 12px 0 rgb(0 0 0 / 0.15)',
        large: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      // Engineered Spacing System
      spacing: {
        // Section Padding (Vertical)
        'section-y': '5rem',        // 80px (desktop)
        'section-y-lg': '6rem',     // 96px (hero sections)
        'section-y-sm': '3rem',     // 48px (mobile)
        'section-y-mobile': '4rem', // 64px (mobile sections)
        // Component Padding
        component: '2rem',          // 32px (card interiors)
        'component-lg': '2.5rem',   // 40px (large cards)
        'component-sm': '1.5rem',   // 24px (compact cards)
        // Grid Gaps
        'grid-gap': '2rem',         // 32px (default grid)
        'grid-gap-lg': '3rem',      // 48px (metrics, stats)
        'grid-gap-sm': '1rem',      // 16px (tight content)
        // Element Gaps
        element: '1rem',            // 16px (consistent rhythm)
        'element-sm': '0.5rem',     // 8px (tight spacing)
      },

      maxWidth: {
        content: '800px',
        section: '1200px',
        wide: '1280px',
      },

      // Animation Timings
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionProperty: {
        common: 'transform, opacity, box-shadow, color, background-color',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 400ms ease-out',
        'fade-in': 'fade-in 400ms ease-out',
      },
    },
  },
  plugins: [],
};
