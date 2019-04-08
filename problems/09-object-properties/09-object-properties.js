/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let boat = ['Chair', 'Cabin', 'Rudder', 'Wheel'];
function objectProperties(someObj) {

    for (let objectfield in someObj)
    {
        console.log(`objectfield = ${objectfield} 
        and value = ${someObj [objectfield]}`);
    }
return someObj;
}

console.log(objectProperties(boat))