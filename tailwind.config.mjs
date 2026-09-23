/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          border: '#1f1f1f',
          text: '#e5e5e5',
          muted: '#888888',
        },
        light: {
          bg: '#fafafa',
          surface: '#ffffff',
          border: '#e5e7eb',
          text: '#0a0a0a',
          muted: '#525252',
        },
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          glow: 'rgba(34, 197, 94, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        grid: '1100px',
      },
    },
  },
  plugins: [],
};
