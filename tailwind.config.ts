import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      aspectRatio: {
        'custom01': '718 / 624', // Define tu relación de aspecto personalizada
      },
    },
  },
  plugins: [],
} satisfies Config;
