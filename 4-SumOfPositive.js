function positiveSum(arr) {
    // let sum = 0;
    // if(arr.length == 0){
    //     return sum;
    // }

    // for(num of arr){
    //     if(num<0){
    //         continue;
    //     }
    //     sum += num;
    // }
    // return sum;

    return arr.reduce((sum, num) => sum+(num>0 ? num : 0),0);
}

console.log(positiveSum([1,-4,7,12]));