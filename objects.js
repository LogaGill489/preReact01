//object property shorthand
//this adds objects to the classs as you create it.

const name = "Logan";

const user = {
    name,
};

console.log(user.name);

//lets look at an example of object destructuring. ************ Look into this further **************
//this is essentially like deconstructing an object from the inside out, so that the new variables are easier to use:

const user2 = {
    name: "Logan",
    age: 18,
    isEnglishSpeaker: true,
  };

/*
  // Dot property access
const name = user.name;
const age = user.age;

// Object destructuring
const { age, name, isEnglishSpeaker: knowsEnglish } = user2;
// Use ':' to rename a value as you destructure it.

console.log(knowsEnglish); // true
*/

//Spread Operators

const moreUserInfo = {
    age: 70,
    country: "Canada",
  };
  
  // Copy all of user's properties into secondUser
  //This combines the variables with the same name, i.e. 'age' in this example,
  //taking the most recent declaration.
  const secondUser = {
    ...user2,
    ...moreUserInfo,
    computer: "MacBook Pro",
  };
  
  console.log(secondUser);
  // { name: "Logan", age: 70, isEnglishSpeaker: true, country: "Canada", computer: "Macbook Pro" }