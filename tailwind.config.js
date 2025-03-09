/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'primary-light': 'var(--primary-light)',
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'accent-light': 'var(--accent-light)',
        'accent': 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'background': 'var(--background)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    'glass',
    'glass-card',
    'glass-button',
    'glass-input'
  ]
}; 