console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function findShort(s) {
    return s.split(' ').reduce((min, word) => {
        if (min > word.length)
            return word.length;
        return min;
    }, Infinity);
}