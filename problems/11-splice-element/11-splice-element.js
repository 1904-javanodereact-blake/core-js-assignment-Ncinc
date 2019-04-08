/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

let someArr = [10, 20, 30];

function spliceElement(someArr, index) {

    let changeArray = [];

   
    
    for (let value of someArr) {
    
        if( someArr[index] === value)
        {
            // Do nothing
        }
        else
        {
            changeArray.push(value);
        }

    }
    console.log(changeArray);
  
}

spliceElement(someArr, 0);

