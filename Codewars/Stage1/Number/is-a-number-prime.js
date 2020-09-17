function isPrime(n) {
    if (n < 2)
        return false;

    let counter = 2;
    const max = Math.sqrt(n);
    while (counter <= max) {
        if (n % counter === 0) {
            return false;
        }
        counter += 1;
    }

    return true;
}
