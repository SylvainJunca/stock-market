
function maxProfit(arr) {
    var bruteData = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < (arr.length - 1); j++){
          bruteData.push(arr[j+1] - arr[i]);
        }
    }
    bruteData.sort((a, b) => a - b);
    var mProfit = bruteData.length - 1;
    if(bruteData[mProfit] > 0) {
        return bruteData[mProfit];
    }
    return -1;
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 24, 23, 21, 19, 8, 4]));