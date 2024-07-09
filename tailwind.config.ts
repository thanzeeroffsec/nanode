import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

type ColorPalette = {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
};

// Custom function to flatten the color palette
function flattenColorPalette(colors: ColorPalette) {
  // Use ColorPalette type
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      acc[key] = value;
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([num, color]) => {
        acc[`${key}-${num}`] = color;
      });
    }
    return acc;
  }, {} as ColorPalette); // Initialize acc as ColorPalette type
}

const addVariablesForColors = ({
  addBase,
  theme,
}: {
  addBase: Function;
  theme: Function;
}) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
