/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {


      case 'Square':
      drawSquare (height, character);
      
      break;

      case 'Triangle':
      drawTriangle( height, character);
      
      break;

      case 'Diamond':
      drawDiamond( height, character);
      
      break;

    default:
      break;
  }
}

function drawSquare (height, character)
{
  let result = "";
  for(let y = 0; y < height; y++)
  {
    for(let x = 0; x < height; x++)
    { 
        result = result + character;
    }
    result = result + '\n';
  } 
  return result;
}


//////////////////////////////////////////////////////////
function drawStriangle (height, character)
{

  let result = "";

  for(let y = 0; y <= height; y++)
  {
 for(let x = 0; x < y; x++)
 {
  result = result + character;
 }
 result = result + '\n';
  } 
  return result;
}
///////////////////////////////////////////////////////


function drawDiamond (height, character)
{
}

console.log(drawSquare(5, '%'))

console.log(drawStriangle(5, '$'))