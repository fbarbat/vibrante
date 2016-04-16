(function (app) {
    'use strict';

    app.Row = function Row(height, cellWidth, blocks) {
        this.height = height;
        this.cellWidth = cellWidth;
        this.blocks = blocks;
    };

    app.Row.prototype.render = function render(context, position) {
        var i;
        for (i = 0; i < this.blocks.length; i++) {
            this.blocks[i].render(context, position);
            position.x += this.painting.cellGap;
        }
    }

})(window.app || (window.app = {}));