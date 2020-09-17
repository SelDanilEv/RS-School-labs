console.log(factorial(3))

function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError();
    let res = 1;
    for (let i = 2;i<=n;i++) {
        res *= i;
    }
    return res;
}