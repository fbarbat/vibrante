(function (app) {
    'use strict';
    app.SimulatorComponent =
        ng.core.Component({
                selector: 'simulator',
                templateUrl: 'app/simulator/simulator.html',
                styleUrls: ['app/simulator/simulator.css'],
                directives: [app.SimulatorControlsComponent],
                queries: {
                    paintingCanvas: new ng.core.ViewChild("paintingCanvas"),
                    simulatorControls: new ng.core.ViewChild("simulatorControls")
                },
                providers: [app.PaintingFactory, app.GoogleAnalytics]
            })
            .Class({
                constructor: [app.PaintingFactory, app.GoogleAnalytics, function (paintingFactory, googleAnalytics) {
                    this.paintingFactory = paintingFactory;
                    this.googleAnalytics = googleAnalytics;
                }],

                ngAfterViewInit: function () {
                    this.generate();
                },

                onPaintingRequested : function(){
                    this.googleAnalytics.sendEvent('Simulator', 'paintingRequested');
                    this.generate();
                },
                
                generate: function () {
                    var canvasElement = this.paintingCanvas.nativeElement;
                    var context = canvasElement.getContext("2d");
                    var specification = this.simulatorControls.specification;
                    var painting;

                    canvasElement.width = specification.sizes.width;
                    canvasElement.height = specification.sizes.height;

                    painting = this.paintingFactory.create(specification);
                    painting.render(context);
                }

            });
})(window.app || (window.app = {}));