import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03343d",
        "main-black": "#040308",
      },
      gridTemplateColumns: {
        products: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
