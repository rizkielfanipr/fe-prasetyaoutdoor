module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path untuk file React Anda
    "./public/index.html", // Path untuk file HTML
    "./node_modules/flowbite/**/*.js" // Menambahkan path untuk Flowbite
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'system-ui'], // Menambahkan font kustom
      },
    },
  },
  plugins: [
    require('daisyui'), // Menambahkan daisyUI sebagai plugin
    require('flowbite/plugin') // Menambahkan Flowbite sebagai plugin
  ],
  daisyui: {
    themes: ["light"], // Menentukan tema yang ingin Anda gunakan
  },
}