// 缓存,不用每次都去硬盘里面找, 在内存中缓存
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {};// key //实现 get  set
    this.arr = [];
}
LRUCache.prototype.get = function (key) {
    // 如果key 设置为最近使用 存在 renturn value
    //容量不大的内存服务于最多的进程
    var val = this.obj[key];
    if (val>0) {
        var index= this.arr.indexOf(key);
        this.arr.splice(index, 1);
        this.unshift(key);
        return this.obj[key];
    }
    else{
        return -1;
    }
    
    // 如果key 不存在 return -1
}
LRUCache.prototype.set = function (key, value) {
    // 如果有key 就返回
    if (this.obj[key]) {
        this.obj[key] = value;//更新
        //最近使用
        // ? 之前的删除
        var index = this.arr.indexOf(key);
        //根据value 获取下标
        this.arr.splice(index, 1);
        this.arr.unshift(key);
    }
    // 没有的话, 两种可能
    if (this.capacity === this.arr.length) {
        //放满了
        var k = this.arr.pop();
        //最近最少未使用
        this.obj[k] = undefined;//删除对象字面量上面的K值
    }
    this.obj[key] = value;
    this.arr.unshift(key);
}