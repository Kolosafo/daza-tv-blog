import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
      //   "xlg": { max: "1400px" },
      //   "lg": { max: "1200px" },
        "Bmd": { max: "720px" },
        "xmd": { max: "640px" },
      //   "sm": { max: "500px" },
      //   "xsm": { max: "400px" },
      },
      colors: {
        TXT: "#000000",
        BG: "#ffffff",
        PR_BTN: "#93dc99",
        SC_BTN: "#ecf9f3",
        ACT: "#46c38f",
      },
    },
  },
  plugins: [],
}
export default config
