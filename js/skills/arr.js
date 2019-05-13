const arr = [99, 0, 33, 1, 2];
const arr1 = [99, 0, 33,[101, 202], 1, 2];
let max = arr[0];
let len = arr.length;
for( let i =1;i<len;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
return max;
