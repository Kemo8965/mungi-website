module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                100: 600,
                200: 900
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}