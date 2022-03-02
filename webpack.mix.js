const mix = require("laravel-mix");


mix.setResourceRoot("./")
    .js("js/App.js", "build")
    .sass('sass/style.scss', './');
    