// Stack -> LIFO
// Functions provided in stack -> push, pop, peek, length

const letters = [];
const word = "racsecar";
let rword = "";

const checkIfPalindrome = (word, letters, rword) => {
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    console.log(letters);
    rword += letters.pop();
  }

  if (rword === word) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is NOT a palindrome`);
  }
};

// checkIfPalindrome(word, letters, rword);
const stack = () => {
  let count = 0;
  let storage = {};

  //push func
  const push = (value) => {
    storage[count] = value;
    count++;
  };
};
