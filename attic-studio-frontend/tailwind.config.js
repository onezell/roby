/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-agrandir)', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.3' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.4' }],
        'h4': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      colors: {
        // Attic Studio Official Brand Colors - Dark theme (Febucci style)
        primary: {
          DEFAULT: '#1250A1',      // Brand blue
          50: '#e6f0fb',
          100: '#cce0f6',
          200: '#99c2ed',
          300: '#66a3e4',
          400: '#3385db',
          500: '#1250A1',          // Main brand blue
          600: '#0e4081',
          700: '#0b3061',
          800: '#072040',
          900: '#041020',
          light: '#639FCF',        // Light blue variant
        },
        secondary: {
          DEFAULT: '#639FCF',      // Light blue (cyan glow)
          50: '#f0f7fc',
          100: '#e1eff9',
          200: '#c3dff3',
          300: '#a5cfed',
          400: '#87bfe7',
          500: '#639FCF',          // Main light blue
          600: '#4f7fa6',
          700: '#3b5f7c',
          800: '#284053',
          900: '#142029',
          glow: '#7db8ff',         // Brighter cyan for glow effects
        },
        accent: {
          DEFAULT: '#F8C457',      // Brand yellow/gold
          50: '#fef9ec',
          100: '#fdf3d9',
          200: '#fbe7b3',
          300: '#f9db8d',
          400: '#f7cf67',
          500: '#F8C457',          // Main yellow
          600: '#c69d46',
          700: '#957634',
          800: '#634e23',
          900: '#322711',
          yellow: '#F8C457',       // Alias
          glow: '#ffdb7a',         // Brighter yellow for glow effects
        },
        // Dark theme backgrounds (Febucci style)
        background: {
          DEFAULT: '#0a1128',      // Dark navy background
          primary: '#0a1128',      // Main dark background
          secondary: '#131e44',    // Lighter dark blue
          tertiary: '#1a2847',     // Even lighter
          elevated: '#1f2d52',     // Elevated elements
          overlay: 'rgba(10, 17, 40, 0.95)',  // Semi-transparent overlay
        },
        // Text colors for dark background
        text: {
          primary: '#ffffff',      // White
          secondary: '#e0e6f0',    // Light gray-blue
          muted: '#a0aac0',        // Medium gray-blue
          light: '#6b7585',        // Dark gray
        },
        // Neutral grays for dark theme
        neutral: {
          50: '#f8f9fb',
          100: '#e8eaf0',
          200: '#d1d4db',
          300: '#b4b9c5',
          400: '#8b95ab',
          500: '#5a6478',
          600: '#404854',
          700: '#2d3340',
          800: '#1a1f2b',
          900: '#0d1117',
        },
        // Glow colors for special effects
        glow: {
          cyan: '#7db8ff',         // Cyan glow
          yellow: '#ffdb7a',       // Yellow glow
          blue: '#4d8fd9',         // Blue glow
          purple: '#a78bfa',       // Purple accent
          pink: '#f472b6',         // Pink accent
        },
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'container': 'clamp(1rem, 3vw, 2rem)',
      },
      maxWidth: {
        'container': '1280px',
        'prose': '65ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glow-pulse-slow': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'particle-float': 'particleFloat 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particleFloat: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100px, -800px)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(125, 184, 255, 0.5), 0 0 40px rgba(125, 184, 255, 0.3)',
        'glow-yellow': '0 0 20px rgba(255, 219, 122, 0.5), 0 0 40px rgba(255, 219, 122, 0.3)',
        'glow-blue': '0 0 20px rgba(77, 143, 217, 0.5), 0 0 40px rgba(77, 143, 217, 0.3)',
        'glow-cyan-lg': '0 0 30px rgba(125, 184, 255, 0.6), 0 0 60px rgba(125, 184, 255, 0.4)',
        'glow-yellow-lg': '0 0 30px rgba(255, 219, 122, 0.6), 0 0 60px rgba(255, 219, 122, 0.4)',
      },
    },
  },
  plugins: [],
}

