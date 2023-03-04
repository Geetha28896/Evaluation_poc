let string = "geethaaaaakkg";
var repeatingChar = function findRepeatedChars(s) {
  let repeatedChars = [];
  let nonRepeatingChars=[];
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    // console.log("1 "+charCount)
    // console.log("2 "+charCount[i])
    // console.log("value "+charCount[s[i]])
    if (charCount[s[i]]) {
      charCount[s[i]]++;
     // console.log("char " + charCount[s[i]]++);
    } else {
      charCount[s[i]] = 1;
    }
  }
  console.log(charCount)
  for (let char in charCount) {
    if (charCount[char] > 1) {
      repeatedChars.push(char);
    }
  }
  for (let char2 in charCount) {
    if (charCount[char2]==1) {
        nonRepeatingChars.push(char2);
    }
  }
  //return repeatedChars;

  console.log("Repeating Characters : "+repeatedChars)
  console.log("Non Repeating Characters : "+nonRepeatingChars)
};


console.log(repeatingChar(string));
