module.exports = {
  darkMode: 'class', 
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1e1e2f',
        darkCard: '#2a2a3c',
        darkText: '#d1d1e0',
        primaryAccent: '#4f46e5',
        secondaryAccent: '#9333ea',
      },
      boxShadow: {
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
