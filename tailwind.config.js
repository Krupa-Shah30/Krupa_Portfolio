/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/styles/globals.css',
    './content/**/*.mdx'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b', // slate-800 for consistency with homepage
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 2px 8px rgba(30,41,59,0.08)'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
