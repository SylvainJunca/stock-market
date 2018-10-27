
function maxProfit(arr) {
    var bruteData = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < (arr.length - 1); j++){
          bruteData.push(arr[i+1] - arr[j]);
        }
    }
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); 