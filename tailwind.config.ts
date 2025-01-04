import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./styles/*.css",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica"],
      title: ["Playfair Display"],
      body: ["Montserrat"]
    },
    extend: {
      colors: {
        primary: "#4a767f",
        secondary: "#222",
        body: "#222",
        tertiary: "#f8f7f2",
        highlight: "#f8f7f2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
