(function (app) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent,
            [ng.router.ROUTER_PROVIDERS,
                ng.core.provide(ng.router.LocationStrategy, {useClass: ng.router.HashLocationStrategy})]);
    });
})(window.app || (window.app = {}));