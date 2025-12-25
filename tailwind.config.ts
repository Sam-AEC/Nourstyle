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
        // Women's theme colors (Luxurious & Warm)
        women: {
          bg: '#FAFAF9',     // Warm Stone-50
          surface: '#FFFFFF',
          primary: '#2A5C5A', // Deep Elegant Teal
          secondary: '#DBC1AC', // Champagne/Sand
          text: '#292524',    // Warm Gray-800
          'text-muted': '#78716C', // Warm Gray-500
          border: '#E7E5E4',
        },
        // Men's theme colors (Bold & Sharp)
        men: {
          bg: '#0F172A',      // Slate-900 (Rich Midnight)
          surface: '#1E293B', // Slate-800
          primary: '#2DD4BF', // Teal-400 (Vibrant but premium)
          secondary: '#64748B', // Slate-500
          text: '#F1F5F9',    // Slate-100
          'text-muted': '#94A3B8', // Slate-400
          border: '#334155',
        },
        // Neutral colors
        neutral: {
          0: '#FFFFFF',
          100: '#F5F5F4', // Stone-100
          900: '#1C1917', // Stone-900
        },
        // Semantic colors
        success: '#10B981', // Emerald-500
        warning: '#F59E0B', // Amber-500
        error: '#EF4444',   // Red-500
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
