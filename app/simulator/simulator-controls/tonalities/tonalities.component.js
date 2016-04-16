(function (app) {
    'use strict';

    app.TonalitiesComponent =
        ng.core.Component({
                selector: 'tonalities',
                templateUrl: 'app/simulator/simulator-controls/tonalities/tonalities.html',
                inputs: ['value'],
                outputs: ['valueChanged']
            })
            .Class({
                constructor: function () {
                    this.valueChanged = new ng.core.EventEmitter();
                },

                setTonality : function setTonality(i, color){
                    this.value[i] = color;
                    this.valueChanged.next(this.value);
                }

            });

})(window.app || (window.app = {}));