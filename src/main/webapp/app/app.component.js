(function (app) {
    'use strict';
    app.AppComponent =
        ng.core.Component({
                selector: 'app',
                templateUrl: 'app/app.html',
                styleUrls: ['app/app.css'],
                directives: [ng.router.ROUTER_DIRECTIVES]
            })
            .Class({
                constructor: function () {
                }
            });

    app.AppComponent = ng.router.RouteConfig([
        {path: '/', component: app.HomeComponent, name: 'Home', useAsDefault: true},
        {path: '/simulator', component: app.SimulatorComponent, name: 'Simulator'}
    ])(app.AppComponent);

})(window.app || (window.app = {}));