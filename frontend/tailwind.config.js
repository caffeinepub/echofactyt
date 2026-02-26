import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))'
        },
        // EchoFactyt brand colors
        coral: {
          50: 'oklch(0.97 0.04 30)',
          100: 'oklch(0.93 0.08 30)',
          200: 'oklch(0.86 0.13 30)',
          300: 'oklch(0.78 0.18 30)',
          400: 'oklch(0.70 0.21 30)',
          500: 'oklch(0.62 0.22 30)',
          600: 'oklch(0.54 0.20 30)',
          700: 'oklch(0.46 0.17 30)',
        },
        teal: {
          50: 'oklch(0.97 0.04 165)',
          100: 'oklch(0.93 0.08 165)',
          200: 'oklch(0.86 0.12 165)',
          300: 'oklch(0.78 0.16 165)',
          400: 'oklch(0.72 0.18 165)',
          500: 'oklch(0.62 0.20 165)',
          600: 'oklch(0.52 0.18 165)',
        },
        amber: {
          50: 'oklch(0.97 0.05 85)',
          100: 'oklch(0.93 0.10 85)',
          200: 'oklch(0.88 0.15 85)',
          300: 'oklch(0.82 0.18 85)',
          400: 'oklch(0.78 0.19 85)',
          500: 'oklch(0.72 0.20 85)',
          600: 'oklch(0.62 0.18 85)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.14)',
        glow: '0 0 20px rgba(200, 100, 50, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};
