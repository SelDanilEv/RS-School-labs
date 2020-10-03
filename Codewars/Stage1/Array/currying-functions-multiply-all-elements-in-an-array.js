console.log(multiplyAll([1])(1));

function multiplyAll(array){
    return function(n){
        return array.map(numb=>numb*n);
    }
}