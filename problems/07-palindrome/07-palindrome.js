/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
 
        let word = '';
        let revword = '';
    
        for (let i = someStr.length -1; i >= 0; i--)
        {   
            revword += someStr[i];
        }
   
       for (let i = 0; i <= someStr.length - 1; i++)
       {   
            word += someStr[i];
       }
   
     console.log(revword)
     console.log(word)

     if(revword === word)
     {
      console.log('correct')
      return true; 
     }
     else
     {
      console.log('incorrect')
        return false; 
     }
   
}
console.log(isPalindrome('racecar'))