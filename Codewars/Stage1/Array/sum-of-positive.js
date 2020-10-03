console.log(positiveSum([1, 2, 3, 4, 5]));

function positiveSum(arr) {
    return arr.reduce((acc = 0, cur) => {
        if (cur > 0)  acc += cur;return acc;
    },0);
}