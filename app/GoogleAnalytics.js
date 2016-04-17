(function (app) {
    'use strict';

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', '__ga');

    GoogleAnalytics.parameters = [ng.router.Router];

    function GoogleAnalytics(router) {
        this.router = router;
    }

    GoogleAnalytics.prototype.init = function () {
        window.__ga('create', 'UA-76517754-1', 'auto');

        this.router.subscribe(function () {
            window.__ga('send', 'pageview', location.pathname + location.search + location.hash);
        });
    };

    GoogleAnalytics.prototype.sendEvent = function (category, action) {
        window.__ga('send', 'event', category, action);
    };

    app.GoogleAnalytics = GoogleAnalytics;

})(window.app || (window.app = {}));

