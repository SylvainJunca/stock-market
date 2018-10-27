
function maxProfit(arr) {
    var bruteData = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < (arr.length - 1); j++){
          bruteData.push(arr[j+1] - arr[i]);
        }
    }
    return bruteData;
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); 