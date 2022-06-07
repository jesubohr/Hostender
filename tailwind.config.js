module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "roboto": ["Roboto Flex", "sans-serif"],
            },
            minHeight: {
                "max-full": "calc(100vh - 80px)",
            },
            colors: {
                "light": "#FFE174",
                "main": "#E8C547",
                "dark": "#30323D",
                "gray": "#4D5061",
            },
            screens: {
                xs: "350px",
                gx: "1000px",
            }
        },
    },
    plugins: [],
};
