/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
    function substring(someStr, startIndex, endIndex) {
        let position;
        let change = '';

        if (startIndex < endIndex)
        {
            position = endIndex - startIndex;

            for (let i = 0; i <=position - 1; i++)
            {
                change += someStr[i];
                console.log(change);
            }
            return change;
            console.log('correct input')
        }
        else
        {
            console.log('incorrect input try again')
        }
    }

    console.log(substring('welcome',3,7));