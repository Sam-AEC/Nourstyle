import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Women's theme colors
        women: {
          bg: '#FFFFFF',
          surface: '#F8F8F8',
          primary: '#008080',
          secondary: '#FFBBB1',
          text: '#222222',
          'text-muted': '#6c757d',
          border: '#DDDDDD',
        },
        // Men's theme colors
        men: {
          bg: '#111111',
          surface: '#1E1E1E',
          primary: '#009B8E',
          secondary: '#4E4E4E',
          text: '#EEEEEE',
          'text-muted': '#AAAAAA',
          border: '#333333',
        },
        // Neutral colors
        neutral: {
          0: '#FFFFFF',
          100: '#F8F9FA',
          900: '#000000',
        },
        // Semantic colors
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
