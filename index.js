function isPalindrome(word) {
  // Write your algorithm here
    const splittingWords = word.split('')
    const reverseWords = splittingWords.reverse();
    const joinWords = reverseWords.join('')
    if(word === joinWords){
      return true 
    }else{
      return false 
    }

}
//const abba = 'ray'
//const split = abba.split('')
//const reverse = split.reverse()
//const join = reverse.join('')
//console.log(join)
/* 
  Add your pseudocode here
// check if abba / racecar/ a / robot/ ab are palindrome
// abba /racecar and a should return true
// robot and ab should return false 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
