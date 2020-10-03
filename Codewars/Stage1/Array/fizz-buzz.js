console.log(fizzbuzz(30))

function fizzbuzz(n)
{
   let array =[];
   for (let numb = 1;numb<=n;numb++){
       let pref = '';
       if(!(numb%3)) pref+='Fizz';
       if(!(numb%5)) pref+='Buzz';
       if(pref === '') array.push(numb);
       else array.push(pref);
   }
   return array;
}
