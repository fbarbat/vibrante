(function (app) {
    'use strict';

    app.SimulatorControlsComponent =
        ng.core.Component({
                selector: 'simulator-controls',
                templateUrl: 'app/simulator/simulator-controls/simulator-controls.html',
                styleUrls: ['app/simulator/simulator-controls/simulator-controls.css'],
                directives: [app.TonalitiesComponent],
                outputs: ['paintingRequested']
            })
            .Class({
                constructor: function () {
                    this.paintingRequested = new ng.core.EventEmitter();
                    this.reset();
                },

                generate: function generate() {
                    this.paintingRequested.next(this.specification);
                },

                reset: function reset() {
                    this.specification = {
                        colors: {
                            tonalities: ['#C1250D', '#E9C5A1'],
                            background: '#000000'
                        },
                        rows: {
                            min: 5,
                            max: 10,
                            maxDeviation: .5,
                            separation: .5
                        },
                        cells: {
                            min: 40,
                            max: 60,
                            separation: .1
                        },
                        blocks: {
                            min: 3,
                            max: 5
                        },
                        sizes: {
                            width: 800,
                            height: 600,
                            margin: 20
                        }
                    }
                }


            });
})(window.app || (window.app = {}));