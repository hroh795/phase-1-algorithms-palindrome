function isPalindrome(word) {
  // Write your algorithm here
  let endIndex = word.length-1
  for(let i=0; i<word.length; i++){
    //console.log('inside for loop')
    //console.log(`i value: ${i}`)
   // console.log(`endIndex value: ${endIndex}`)
    //console.log(word[i])
    //console.log(word[endIndex])
  if (word[i]===word[endIndex]){
    endIndex --;
  }else{
    return false;
  }
    }
 return true;
}

/* 
  Add your pseudocode here

  check the first element and 
  the last element char has the same char
  
  mom
  first element: 0
  last elementt: mom.length()=3-1=2

  next element: 1
  last element: 1 

*/

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
