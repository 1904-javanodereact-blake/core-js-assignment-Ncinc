/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let num = someNum;
    let answer = true;
      console.log(num);
    for (let i = someNum; num >= 2; i--){
        
        num -= 2;
        console.log(num);
   }
   if (num ===0)
   {
       console.log('even');
   }
   else
   {
       answer = false;
       console.log('false')
   }
   return (answer);
}

console.log(isEven(20));