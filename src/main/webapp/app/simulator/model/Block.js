(function (app) {
    'use strict';

    app.Block = function Block(cellCount, tonality, leftToRight) {
        this.cellCount = cellCount;
        this.tonality = tonality;
        this.leftToRight = leftToRight;
    };

    app.Block.prototype.render = function render(context, position) {
        var i;
        var start = app.Color.fromHex(this.tonality);
        var end = app.Color.fromHex(this.row.painting.background);
        var aux;
        if (!this.leftToRight) {
            aux = start;
            start = end;
            end = aux;
        }
        var delta = app.Color.delta(start, end, this.cellCount);
        var current = start;

        context.fillStyle = current.toHex();
        context.fillRect(position.x, position.y, this.row.cellWidth, this.row.height);
        position.x += this.row.cellWidth;

        for (i = 1; i < this.cellCount; i++) {
            position.x += this.row.painting.cellGap;

            current = current.add(delta);

            context.fillStyle = current.toHex();
            context.fillRect(position.x, position.y, this.row.cellWidth, this.row.height);
            position.x += this.row.cellWidth;
        }
    }

})(window.app || (window.app = {}));