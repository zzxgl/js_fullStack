const Grid = require("./grid.js");

function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles;
}

GameManager.prototype = {
    setup: function () {
        this.grid = new Grid(this.size);
        // 随机添加方块
        this.addStarTiles();
        return this.grid.cells;
    },
    addStarTiles: function () {
        // 有几块 就调用几次
        for (let i = 0; i < this.startTiles; i++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles:function() {
        // 添加方法
        //  两个随机 位置随机 数值随机
        const value = Math.random() < 0.9 ? 2 : 4;
        //  gird 有数据 晓得哪些位置是空的  
        const position = this.grid.randomAvailableCell();

    }
};

module.exports = GameManager;

