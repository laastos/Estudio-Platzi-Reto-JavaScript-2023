export function findLargestPalindrome(words) {
  let wordMax = "";
  words.forEach((word) => {
    let wordTemp = word.split("").reverse().join("");
    if (word == wordTemp) {
      if (wordTemp.length > wordMax.length) {
        wordMax = word;
      }
    }
  });
  return wordMax == "" ? null : wordMax;
}

// Tests
// Test 1
console.log('Test 1: Palindromo mas largo')
let input1 = ["racecar", "level", "world", "hello"];
let output1 = "racecar";
let calculated = findLargestPalindrome(input1);
console.log(`Result findLargestPalindrome for ${input1}: ${calculated}`)
console.assert(calculated === output1, `Result should be ${output1}`);
