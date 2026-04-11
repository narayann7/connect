// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#ffffff",
        disabled: "#9ca3af",
      },

      rotate: {
        10: "10deg",
      },
      fontFamily: {
        serif: ["Palatino", "Palatino Linotype", "Book Antiqua", "serif"],
        sans: ["Gill Sans", "Gill Sans MT", "DM Sans", "Calibri", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
