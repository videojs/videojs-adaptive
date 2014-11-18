(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['videojs'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('videojs'));
    } else {
        // Browser globals
        factory(videojs);
    }
}(function (videojs) {
    // Register the source handler
    videojs.Html5.registerSourceHandler({}, 0);
}));
