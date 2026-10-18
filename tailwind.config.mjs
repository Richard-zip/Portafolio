/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08080a',
          surface: '#0f0f12',
          border: '#1f1f26',
          text: '#f4f4f6',
          muted: '#9e9ea7',
        },
        light: {
          bg: '#fafafa',
          surface: '#ffffff',
          border: '#e5e7eb',
          text: '#0a0a0a',
          muted: '#525252',
        },
        accent: {
          DEFAULT: '#0284c7',
          hover: '#38bdf8',
          deep: '#0369a1',
          glow: 'rgba(56, 189, 248, 0.16)',
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
