function cake(x, y) {
    let count = 1;
    let fall = y.split('').reduce((sum = 0, cur) => {
        let sl = cur.charCodeAt(0);
        if (!(count % 2)) {
            sl -= 96;
        }
        count++;
        return sum + sl;
    }, 0);

    if (fall > x * 0.7)
        return 'Fire!';
    return 'That was close!';
}