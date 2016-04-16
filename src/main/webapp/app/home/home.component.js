(function(app) {
  app.HomeComponent =
    ng.core.Component({
      selector: 'home',
      templateUrl: 'app/home/home.html',
      directives: [ng.router.ROUTER_DIRECTIVES]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));