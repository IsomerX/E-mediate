module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: {
                    blue: "#020317",
                    red: "#923535",
                    green: "#033512",
                    violet: "#522AA6",
                },
            },
        },
    },
    plugins: [],
};
