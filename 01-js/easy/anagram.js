/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let isTrue = true;

  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (!str2.toLowerCase().includes(str1[i].toLowerCase())) {
        isTrue = false;
      } 
    }

    return isTrue;
  }
}

module.exports = isAnagram;
