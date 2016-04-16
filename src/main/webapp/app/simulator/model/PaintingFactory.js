(function (app) {
    'use strict';

    app.PaintingFactory = function PaintingFactory() {
    };

    app.PaintingFactory.prototype.create = function create(specification) {
        var width = specification.sizes.width;
        var height = specification.sizes.height;
        var background = specification.colors.background;
        var margin = specification.sizes.margin;
        var rowGap = margin * specification.rows.separation;
        var cellGap = margin * specification.cells.separation;
        var rows = createRows(specification);
        var painting = new app.Painting(width, height, background, margin, rowGap, cellGap, rows);
        var i;
        for (i = 0; i < rows.length; i++) {
            rows[i].painting = painting;
        }
        return painting;
    };

    function createRows(specification) {
        var rowsCount = random(specification.rows.min, specification.rows.max);
        var rowsHeight = generateRowsHeight(rowsCount, specification);
        var result = [];
        var i;
        var cellCount;
        var cellWidth;
        var blocks;
        var row;
        var j;
        for (i = 0; i < rowsCount; i++) {
            cellCount = random(specification.cells.min, specification.cells.max);
            cellWidth = (specification.sizes.width - 2 * specification.sizes.margin
                - (cellCount - 1) * specification.sizes.margin * specification.cells.separation)
                / cellCount;
            blocks = generateBlocks(cellCount, specification);
            row = new app.Row(rowsHeight[i], cellWidth, blocks);
            for (j = 0; j < blocks.length; j++) {
                blocks[j].row = row;
            }
            result.push(row);
        }
        return result;
    }

    function random(min, max) {
        return Math.floor((Math.random() * (max + 1 - min))) + min;
    }

    function generateRowsHeight(rowsCount, specification) {
        var weights = generateWeights(rowsCount, specification.rows.maxDeviation);
        var totalCellHeight = specification.sizes.height - specification.sizes.margin * 2
            - (rowsCount - 1) * specification.sizes.margin * specification.rows.separation;
        var result = [];
        var i;
        for (i = 0; i < rowsCount; i++) {
            result.push(totalCellHeight * weights[i]);
        }
        return result;
    }

    function generateBlocks(cellCount, specification) {
        var blockCount = random(specification.blocks.min, specification.blocks.max);
        var distributedCells = distributeCells(cellCount, blockCount);
        var i;
        var result = [];
        var block = null;
        for (i = 0; i < blockCount; i++) {
            block = generateBlock(distributedCells[i], block, specification);
            result.push(block);
        }
        return result;
    }

    function distributeCells(cellCount, blockCount) {
        var result = [];
        var i;
        for (i = 0; i < blockCount; i++) {
            result.push(1);
            cellCount--;
        }
        while (cellCount > 0) {
            result[random(0, blockCount - 1)]++;
            cellCount--;
        }
        return result;
    }

    function generateBlock(cellCount, lastBlock, specification) {
        var tonality = specification.colors.tonalities[random(0, specification.colors.tonalities.length - 1)];
        var leftToRight;
        if (lastBlock !== null && tonality !== lastBlock.tonality) {
            leftToRight = lastBlock.leftToRight;
        } else {
            leftToRight = !!random(0, 1);
        }
        return new app.Block(cellCount, tonality, leftToRight);
    }

    function generateWeights(length, maxDeviation) {
        var weights = [];
        var total = 0;
        var i;
        var weight;
        for (i = 0; i < length; i++) {
            weight = 1 + (Math.random() - .5) * maxDeviation;
            weights.push(weight);
            total += weight;
        }
        for (i = 0; i < length; i++) {
            weights[i] /= total;
        }
        return weights;
    }

})(window.app || (window.app = {}));