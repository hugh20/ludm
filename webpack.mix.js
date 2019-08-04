let mix = require('laravel-mix');
let path = require('path');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')

mix.webpackConfig({
    resolve: {
        alias: {
            'components': 'assets/js/components',
            '@': 'assets/js'
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, 'resources')
        ]
    },
    devServer: {
        disableHostCheck: true
    }
});
