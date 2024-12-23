/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-alpha": "var(--primary-color-alpha)",
        "primary-color-lightest": "var(--primary-color-lightest)",
        "primary-color-lighter": "var(--primary-color-lighter)",
        "primary-color-darker": "var(--primary-color-darker)",
        "primary-color-darkest": "var(--primary-color-darkest)",
        "primary-color-desaturated": "var(--primary-color-desaturated)",
        "primary-color-darker-desaturated": "var(--primary-color-darker-desaturated)",
        "primary-color-darkest-desaturated": "var(--primary-color-darkest-desaturated)",
        "dark-background": "var(--dark-background)",
        "dark-background-darker": "var(--dark-background-darker)",
        "dark-background-darker-2": "var(--dark-background-darker-2)",
        "dark-background-darker-3": "var(--dark-background-darker-3)",
        "dark-background-darkest": "var(--dark-background-darkest)",
        "dark-background-lighter": "var(--dark-background-lighter)",
        "dark-background-lightest": "var(--dark-background--lightest)",
        "dark-foreground": "var(--dark-foreground)",
        foreground: "var(--dark-foreground)"
      }
    }
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false
  },
  blocklist: ["container"]
};
