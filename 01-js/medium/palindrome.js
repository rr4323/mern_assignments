/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(sr) {
  let isPalindrome=true;
  let str=sr.replace(/\W/g, '');

  for( let i=0; i<str.length; i++)
    {
      for ( let j=str.length-i ; j >= i; )
      {
        if(str[i].toLowerCase() != str[j-1].toLowerCase())
        {
          
          isPalindrome=false;
          return isPalindrome;
        }
        else{
          break;
        }
      }
    }
  return isPalindrome;
}

module.exports = isPalindrome;
