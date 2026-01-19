/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#50A7E2',
        charcoal: '#111418',
        'figma-blue': '#0D99FF',
        'figma-hover': '#0C8CE9',
        'figma-dark': '#1E1E1E',
        'figma-text': '#333333',
        'figma-grey': '#F5F5F5',
        'figma-border': '#E5E5E5',
        'background-light': '#FFFFFF',
        'soft-blue': '#f0f9ff',
        'background-dark': '#0B1120',
        'surface-light': '#FFFFFF',
        'surface-dark': '#1E293B',
        accent: {
          light: '#10b981',
          dark: '#059669',
        },
        secondary: '#10B981',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'figma-card': '0px 4px 20px rgba(0, 0, 0, 0.08)',
        'figma-hover': '0px 8px 30px rgba(0, 0, 0, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'figma-panel': '0 2px 5px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)',
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 3.5s infinite',
        'float-fast': 'float 5s ease-in-out 1s infinite',
        'pulse-slow': 'pulse-dot 3s infinite ease-in-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.4' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-subtle': 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

