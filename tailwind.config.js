module.exports = {
    mode: 'jit',
    content: [
        './_site/**/*.html',
        './_site/**/*.js',
        'node_modules/preline/dist/*.js',
    ],
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
        require('preline/plugin'),
    ],
}