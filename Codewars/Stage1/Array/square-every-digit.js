console.log(squareDigits(9119))

function squareDigits(num) {
    return +num.toString().split('').reduce((acc, numb) => {
        return acc += Math.pow(numb, 2).toString();
    }, '');
}