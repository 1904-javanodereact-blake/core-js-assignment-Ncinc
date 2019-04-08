/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

 function reverseStr(someStr){
     let changed = "";    
     for (let i = someStr.length -1; i >= 0; i--){   
         changed += someStr[i];
      // console.log(changed)
      // console.log(someStr.length)
    }    
    return changed;
 }
   console.log(reverseStr('hello'))


  function inorderStr2(someStr){
    let changed2 = "";    
    let position = 1;
    for (let i = 0; i <= someStr.length - 1; i++){   
        changed2 += someStr[i];
      //console.log(changed)
      //console.log(someStr.length)
    }    
    return changed2;
    console.log(changed2)
  }
  console.log(inorderStr2('hello'))