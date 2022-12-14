/*1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/
//Solution 1 :
const reverseNumber = (number) =>
  parseInt(number.toString().split("").reverse().join("") * Math.sign(number));

let x = 32243;
console.log("Question 1, solution 1: " + reverseNumber(x));
//Solution 2 :
function reverseNumber2(number) {
  let res = 0;
  let digit = 0;
  while (number) {
    digit = number % 10;
    res = res * 10 + digit;
    number = Math.floor(number / 10);
  }
  return res;
}

let x2 = 32243;
console.log("Question 1, solution 2: " + reverseNumber2(x2));
//-----------------------------------------------------------------------------------------------------------------
/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run
*/
//Solution 1
const validatePalindrome = (word) => {
  return word.toLowerCase().split("").reverse().join("") == word;
};
let word = "abcdcba";
console.log("Question 2, solution 1: " + validatePalindrome(word));
//Solution 2
function validatePalindrome2(word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] != word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
let word2 = "abcdcba";
console.log("Question 2, solution 2: " + validatePalindrome2(word2));
//------------------------------------------------------------------------------------------------------------------
/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g
*/
function collectCombinations(word) {
  let res = [];
  for (let left = 0; left < word.length; left++) {
    for (let right = left + 1; right < word.length + 1; right++) {
      res.push(word.substring(left, right));
    }
  }
  return res;
}
const word3 = "Dog";
console.log("Question 3: " + collectCombinations(word3));

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function sortInAlphabetical(word) {
  return word.split("").sort().join("");
}
let word4 = "webmaster";
console.log("Question 4: " + sortInAlphabetical(word4));

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/
const upperCaseFirstLetter = (word) => {
  let wordList = word.split(" ");
  let res = [];

  wordList.map((word) => {
    res.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  //   for (let i = 0; i < wordList.length; i++) {
  //     res.push(wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1));
  //   }
  return res.join(" ");
};

let word5 = "the quick brown fox";
console.log("Question 5: " + upperCaseFirstLetter(word5));

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/
const findLongestWord = (wordList) => {
  const newList = wordList.split(" ");
  let res = "";
  let longestLength = -Infinity;

  for (let word of newList) {
    if (word.length > longestLength) {
      longestLength = word.length;
      res = word;
    }
  }
  return res;
};
let word6 = "Web Development Tutorial";
console.log("Question 6: " + findLongestWord(word6));

/* 
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
function countsVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let res = 0;
  for (let i = 0; i < word.toLowerCase().length; i++) {
    if (vowels.indexOf(word.charAt(i)) != -1 && word.charAt(i) != "y") {
      res++;
    }
  }
  return res;
}
let word7 = "The quick browny fox";
console.log("Question 7: " + countsVowels(word7));

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
const checkPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
};
let number8 = 7;
console.log("Question 8: " + checkPrime(number8));

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined
*/
function typesCollection(list) {
  let res = [];
  list.map((item) => {
    res.push(typeof item);
  });
  return res;
}
const obj = { date: "Wedesday" };
const bol = true;
const func = () => {};
const num = 0;
let undef;
const lis = [obj, bol, func, num, undef];
console.log("Question 9: " + typesCollection(lis));

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
*/
function matrixRolesColums(matrix) {
  let row = matrix.length;
  let column = matrix[0].length;
  return `The matirx has ${row} rows and ${column} columns`;
}
const matrix = [
  ["0", "0", "1"],
  ["0", "1", "0"],
  ["1", "0", "0"],
  ["0", "0", "1"],
];
console.log("Question 10: " + matrixRolesColums(matrix));

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4
*/
function secondNumbers(arr) {
  const newArr = arr.sort();
  if (newArr.length < 2) {
    return "There have no enough numbers in array";
  }
  return `The second lowest numbers is ${
    newArr[1]
  }, and the second greatest number is ${newArr[newArr.length - 2]}`;
}
const arr = [5, 4, 3, 2, 1];
console.log("Question 11: " + secondNumbers(arr));
/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128.
*/
function perfectNumber(num) {
  let divisors = [];

  const rule1 = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    divisors.map((index) => {
      sum += index;
    });
    return sum === num;
  };
  const rule2 = (num) => {
    divisors.push(num);
    let res = 0;
    divisors.map((index) => {
      res += index;
    });
    return res / 2 === num;
  };
  return rule1(num) && rule2(num);
}
console.log("Question 12: " + perfectNumber(28));

/*
13. Write a JavaScript function to compute the factors of a positive integer
*/
function allFactors(num) {
  let res = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % 2 === 0) {
      res.push(i);
    }
  }
  return res;
}
const number13 = 10;
console.log("Question 13: " + allFactors(number13));

/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
function amountToCoins(num) {
  const coins = [25, 10, 5, 2, 1];
  let res = [];
  for (let i = 0; i < coins.length; i++) {
    if (num >= coins[i]) {
      num -= coins[i];
      res.push(coins[i]);
      i--;
    }
  }
  return res;
}
console.log("Question 14: " + amountToCoins(46));

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result.
*/
function calculateExponent(b, n) {
  let res = 1;
  const integerRes = (b, n) => {
    for (let i = 0; i < n; i++) {
      res *= b;
    }
    return res;
  };

  if (n < 0) {
    return 1 / integerRes(b, -n);
  } else if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else {
    return integerRes(b, n);
  }
}
console.log("Question 15: " + calculateExponent(2, -5));

/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output:"thequickbrownfxjmpsvlazydg"
*/
function uniqueCharacters(str) {
  const exist = [];
  let res = "";
  str.split("").map((char) => {
    if (exist.indexOf(char) == -1) {
      res += char;
      exist.push(char);
    }
  });
  return res;
}
const word16 = "thequickbrownfoxjumpsoverthelazydog";
console.log("Question 16: " + uniqueCharacters(word16));

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/
function occurrences(str) {
  const pair = {};
  for (let i = 0; i < str.length; i++) {
    if (pair[str.charAt(i)]) {
      pair[str.charAt(i)]++;
    } else {
      pair[str.charAt(i)] = 1;
    }
  }
  return Object.entries(pair);
}
const word17 = "abbcccddffff";
console.log("Question 17: " + occurrences(word17));

/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left == target ? left : `not found target`;
}
const arr18 = [1, 2, 4, 6, 7, 9];
console.log("Question 18: " + binarySearch(arr18, 8));

/*
19. Write a JavaScript function that returns array elements larger than a number.
 */
function largerElements(arr, number) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      res.push(arr[i]);
    }
  }
  return res;
}
const arr19 = [1, 2, 4, 6, 7, 9];
const target = 3;
console.log("Question 19: " + largerElements(arr19, target));

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
function randomCharacters(num) {
  let res = "";
  const sample =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < num; i++) {
    res += sample[Math.floor(Math.random() * sample.length)];
  }
  return res;
}
const num20 = 5;
console.log("Question 20: " + randomCharacters(num20));

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
function subsets(n, k) {
  let res = [];
  let pair = [];
  dfs(n, k, 0, pair, res);
  return res;

  function dfs(n, k, index, pair, res) {
    if (pair.length === k) {
      res.push(...pair);
      return;
    }
    for (let i = index; i < n.length; i++) {
      pair.push(n[i]);
      dfs(n, k, i + 1, pair, res);
      pair.pop();
    }
  }
}

const arr21 = [1, 2, 3];
const len = 2;
console.log("Question 21: " + subsets(arr21, len));

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' Expected output: 3 
*/
function occurrences(str, letter) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      res++;
    }
  }
  return res;
}
const str22 = "microsoft.com";
const num22 = "o";
console.log("Question 22: " + occurrences(str22, num22));

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
function firstNoneRepeated(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
      obj[str[i]] = i;
    } else {
      obj[str[i]] = -1;
    }
  }
  const res = [];
  let min = Infinity;
  let cha = "";
  Object.entries(obj).map(([key, value]) => res.push([key, value]));
  for (let i = 0; i < res.length; i++) {
    if (res[i][1] < min && res[i][1] != -1) {
      min = res[i][1];
      cha = res[i][0];
    }
  }
  return cha;
}
const str23 = "abacddbec";
console.log("Question 23: " + firstNoneRepeated(str23));

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSoring(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr24 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("Question 24: " + bubbleSoring(arr24));

/*
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
function longestName(arr) {
  let len = -Infinity;
  let res = "";
  arr.map((name) => {
    if (name.length > len) {
      len = name.length;
      res = name;
    }
  });
  return res;
}
const arr25 = ["Australia", "Germany", "United States of America"];
console.log("Question 25: " + longestName(arr25));
/*
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. 
*/
function longestSubstring(str) {
  let left = 0;
  let right = 0;
  let res = 0;
  let obj = {};
  while (right < str.length) {
    if (obj[str[right]]) {
      left = Math.max(left, obj[str[right]] + 1);
    }
    obj[str[right]] = right;
    res = Math.max(res, right - left + 1);
    right++;
  }
}
const str26 = "abcabcbb";
console.log("Question 26: " + longestSubstring(str26));

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
*/
function longestPalindrome(str) {
  const validatePalindrome = (substr) => {
    let left = 0;
    let right = substr.length - 1;
    while (left < right) {
      if (substr[left] != substr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  let resStr = 0;
  let maxLen = -Infinity;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (validatePalindrome(str.substring(i, j))) {
        if (str.substring(i, j).length > maxLen) {
          maxLen = str.substring(i, j).length;
          resStr = str.substring(i, j);
        }
      }
    }
  }
  return resStr;
}
const str27 = "bannanna";
console.log("Question 27: " + longestPalindrome(str27));

/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
function fun1(func) {
  func();
}
function fun2() {
  console.log("Question 28: I am function 2");
}
fun1(fun2);
/*
29. Write a JavaScript function to get the function name.
*/
function getFuncName() {
  return getFuncName.caller.name;
}
function testFunction() {
  console.log("Question 29: " + getFuncName());
}
testFunction();
