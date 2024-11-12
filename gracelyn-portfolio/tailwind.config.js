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
        'headshot-banner': "url('/images/headshot-banner.jpg')",
        'blurb-banner': "url('/images/blurb-banner.jpg')",
      },
    },
  },
  plugins: [],
}

