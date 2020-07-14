module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.vue", "./src/**/*.js"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
      whitelist: ["grayscale"],
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      fontFamily: {
        sans: ["Inter var"],
        display: ["Inter var"],
        body: ["Inter var"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
