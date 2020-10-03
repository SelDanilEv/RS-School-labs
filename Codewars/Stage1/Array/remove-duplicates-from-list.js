function distinct(a) {
    let rc = [];
    for (let item of a) {
        if (! rc.includes(item)) rc.push(item);
    }
    return rc;
}