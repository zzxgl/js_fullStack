function flatten(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    // 1 递归解决 将多层数组的扁平化分为多个一维数组跟旁边的数值contact 
    // 2 退出条件是不再有数组了, 退出递归 reduce消除数组
    const flattenArr = arr.reduce((prev, cur) => {
       return  prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
    return flattenArr;
}
const arr_ = [22, [2, 3, 1], 2, 3];
const f = flatten(arr_);
console.log(f);