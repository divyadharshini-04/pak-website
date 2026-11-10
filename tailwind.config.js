/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pak: {
          navy: '#172B3A',
          'navy-dark': '#0F1E29',
          'navy-light': '#213B4E',
          gold: '#D88B38',
          'gold-light': '#E9A658',
          'gold-dark': '#B86F22',
          cream: '#F6F1E8',
          'cream-light': '#FCFAF6',
          'cream-dark': '#ECE4D4',
          forest: '#344D45',
          'forest-light': '#426258',
          charcoal: '#202322',
          'charcoal-light': '#2E3332',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 43, 58, 0.08), 0 0 1px 1px rgba(216, 139, 56, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(23, 43, 58, 0.16), 0 0 2px 1px rgba(216, 139, 56, 0.3)',
        'gold-glow': '0 0 25px rgba(216, 139, 56, 0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
