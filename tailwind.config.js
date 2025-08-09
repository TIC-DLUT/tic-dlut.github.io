/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#0052D9',
                    600: '#0041a8',
                    700: '#003177',
                },
                secondary: {
                    500: '#00A9FF',
                    600: '#0087cc',
                },
                accent: {
                    500: '#FF6B6B',
                },
                dark: {
                    50: '#f8fafc',
                    800: '#1e293b',
                    900: '#0A0E27',
                    950: '#0A0A0A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0052D9 0%, #00A9FF 100%)',
                'gradient-dark': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0e27 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 82, 217, 0.3)',
                'glow-lg': '0 0 40px rgba(0, 82, 217, 0.4)',
            }
        },
    },
    plugins: [],
}