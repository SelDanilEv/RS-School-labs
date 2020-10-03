console.log(count("aba"))

function count(string) {
    return string.split('').reduce((acc, letter) => {
        if (acc[letter])
            acc[letter]++;
        else
            acc[letter] = 1
        return acc;
    }, {});
}