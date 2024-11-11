/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('/images/banner-image.jpg')",
        'headshot-banner': "url('/images/headshot-banner.jpg')"
      },
    },
  },
  plugins: [],
}

