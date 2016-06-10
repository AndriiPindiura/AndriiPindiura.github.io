/// <reference path="jquery.d.ts" />
requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min',
        'template': 'resig'
    }
});

requirejs(['main']);