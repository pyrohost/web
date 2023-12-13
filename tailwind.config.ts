import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandGrad: 'radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)',
        brand: '#fa4e49',
        dark: {
          100: "#cfcece",
          200: "#9f9c9c",
          300: "#6e6b6b",
          400: "#3e3939",
          500: "#0e0808",
          600: "#0b0606",
          700: "#080505",
          800: "#060303",
          900: "#030202",
          950: '#020101',
          1000: '#000000',
        }
      },
    }
  },
  plugins: [],
}
export default config
