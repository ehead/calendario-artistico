var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function(mix) {
    mix.scripts([
	'resources/assets/js/jquery.js',
        'resources/assets/js/bootstrap.min.js',
	'resources/assets/js/coundown-timer.js',
        'resources/assets/js/gmaps.js',
        'resources/assets/js/html5shiv.js',
        'resources/assets/js/jquery.nav.js',
        'resources/assets/js/jquery.parallax.js',
        'resources/assets/js/jquery.scrollTo.js',
        'resources/assets/js/main.js',
        'resources/assets/js/modernizr.custom.86080.js',
        'resources/assets/js/respond.min.js',
	'resources/assets/js/smoothscroll.js',
    ]);
    mix.sass(['app.scss'], 'resources/assets/css/');
    mix.styles([
        'bootstrap.min.css',
        'animate.css',
        'font-awesome.min.css',
        'main.css',
        'responsive.css',
        
    ]);
    mix.copy([
        'resources/assets/fonts/',
    ], 'public/fonts/');
});

