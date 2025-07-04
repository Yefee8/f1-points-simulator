/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                '0.25rem': '0.25rem',
                '0.5rem': '0.5rem',
                '0.75rem': '0.75rem',
                '1rem': '1rem',
                '1.125rem': '1.125rem',
                '1.25rem': '1.25rem',
                '1.5rem': '1.5rem',
                '2rem': '2rem',
                '2.5rem': '2.5rem',
                '4rem': '4rem',
                '6rem': '6rem',
            },
            fontSize: {
                '0.875rem': '0.875rem',
                '1rem': '1rem',
                '1.125rem': '1.125rem',
                '1.25rem': '1.25rem',
                '2rem': '2rem',
                '4rem': '4rem',
            },
            gap: {
                '0.5rem': '0.5rem',
                '0.75rem': '0.75rem',
                '1rem': '1rem',
                '2rem': '2rem',
            },
            width: {
                '1.5rem': '1.5rem',
                '2rem': '2rem',
                '2.5rem': '2.5rem',
                '4rem': '4rem',
                '6rem': '6rem',
                '8rem': '8rem',
            },
            minWidth: {
                '4rem': '4rem',
                '6rem': '6rem',
                '8rem': '8rem',
            },
            height: {
                '1.5rem': '1.5rem',
                '2rem': '2rem',
                '2.5rem': '2.5rem',
            }
        },
    },
    plugins: [],
};