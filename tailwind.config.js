/** @type {import('tailwindcss').Config} */
export default {
  // Le thème sombre est piloté par une classe "dark" sur <html>,
  // exactement comme dans la version HTML/CSS d'origine.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ces couleurs pointent vers des variables CSS définies dans index.css.
        // Elles changent donc automatiquement de valeur quand la classe "dark"
        // est togglée, sans avoir à dupliquer les classes Tailwind.
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-mut': 'var(--text-mut)',
        'text-faint': 'var(--text-faint)',
        primary: 'var(--primary)',
        'primary-d': 'var(--primary-d)',
        cyan: 'var(--cyan)',
        orange: 'var(--orange)',
        green: 'var(--green)',
        red: 'var(--red)',
        gold: 'var(--gold)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(30,41,86,.12)',
        'card-dark': '0 10px 30px -12px rgba(0,0,0,.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(31,181,121,.45)' },
          '70%': { boxShadow: '0 0 0 9px rgba(31,181,121,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(31,181,121,0)' },
        },
        marqueeRight: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        marqueeLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
        pulseRing: 'pulseRing 2s ease-out infinite',
        'marquee-right': 'marqueeRight 28s linear infinite',
        'marquee-left': 'marqueeLeft 28s linear infinite',
      },
    },
  },
  plugins: [],
};
