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
    },
    extend: {
      colors: {
        primary: "#2ECC40",
        secondary: "#001F3F",
        tertiary: "#FFFFFF",
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
