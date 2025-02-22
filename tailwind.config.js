module.exports = {
    content: ['./_site/**/*.html', './_site/**/*.js'],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: ['light'],
    },
    tailwindcss: {
      themes: ['light'],
    },
    plugins: [
        require('daisyui'),
    ],
}