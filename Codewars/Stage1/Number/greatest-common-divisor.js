function mygcd(x, y) {
    let max = Math.max(x % y, y % x);
    for (let i = max; i > 1; i--) {
        if (x%i===0&&y%i===0) {
            return i;
        }
    }
    return 1;
}