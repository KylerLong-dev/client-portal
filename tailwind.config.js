module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',      // Tailwind blue-900
        secondary: '#1d4ed8',    // Tailwind blue-700
        accent: '#7dd3fc',       // Tailwind blue-300
        white: '#f7faff',        // Slightly off-white
        offwhite: '#e6f0fa',     // Darker off-white
        // Add more custom colors here
      },
    },
  },
  // ...other config
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
}
