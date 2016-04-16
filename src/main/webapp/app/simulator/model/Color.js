(function (app) {
    'use strict';

    app.Color = function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };

    app.Color.prototype.add = function add(color) {
        return new app.Color(this.r + color.r, this.g + color.g, this.b + color.b);
    };

    function componentToHex(c) {
        var hex = Math.floor(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    app.Color.prototype.toHex = function toHex() {
        return "#" + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
    };

    app.Color.fromHex = function fromHex(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            new app.Color(parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16))
            : null;
    };

    app.Color.delta = function delta(start, end, steps) {
        var divisor = steps - 1;
        return new app.Color((end.r - start.r) / divisor, (end.g - start.g) / divisor, (end.b - start.b) / divisor);
    }


})(window.app || (window.app = {}));