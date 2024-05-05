/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    fontFamily: {
      hindVadodara: ["Hind Vadodara", "sans-serif"],
    },
  },
};

export const plugins = [];
