console.log(isAnagram("3freef","ee3rff"))

function isAnagram(test, original) {
    if (test.length !== original.length)
        return false;
    test = test.toLowerCase();
    original = original.toLowerCase();

    let testarr = test.split('');
    let originalarr = original.split('');

    for (let letter of testarr){
        if(originalarr.includes(letter)){
            originalarr.splice(originalarr.findIndex(x => x === letter),1);
        }
        else{
            return false;
        }
    }
    return true;
};