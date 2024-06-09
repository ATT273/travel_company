import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|date-picker|button|ripple|spinner|date-input|popover).js"
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
    },
  },
  plugins: [nextui()],
};
export default config;
