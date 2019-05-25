let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.webpackConfig({
    resolve: {
        alias: {
            'components': 'assets/js/components',
            '@': 'assets/js',
            'view$': 'assets/view'
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, 'resources')
        ]
    }
});
