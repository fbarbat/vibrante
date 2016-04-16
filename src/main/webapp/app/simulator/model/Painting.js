(function (app) {
    'use strict';

    app.Painting = function Painting(width, height, background, margin, rowGap, cellGap, rows) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.margin = margin;
        this.rowGap = rowGap;
        this.cellGap = cellGap;
        this.rows = rows;
    };

    app.Painting.prototype.render = function render(context) {
        var position = new app.Position();
        var i;

        context.fillStyle = this.background;
        context.fillRect(position.x, position.y, this.width, this.height);

        position.x = this.margin;
        position.y = this.margin;

        for (i = 0; i < this.rows.length; i++) {
            this.rows[i].render(context, position);
            position.x = this.margin;
            position.y += this.rows[i].height;
            position.y += this.rowGap;
        }
    }

})(window.app || (window.app = {}));