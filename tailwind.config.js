
// This configuration is loaded before the Tailwind CSS CDN to customize the theme.
// In a standard build environment (using npm), this would be module.exports.
window.tailwind = {
  config: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Lato', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          gold: {
            50: '#FBF8F3',
            100: '#F5EFE5',
            200: '#EADBC2',
            300: '#DFC69F',
            400: '#D4B17D',
            500: '#C99C5A', // Base gold
            600: '#A17D48',
            700: '#795D36',
            800: '#503E24',
            900: '#281F12',
          }
        }
      }
    }
  }
};
