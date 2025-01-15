//In order to combine two strings, there exists a built-in method that makes it easier

//pre ES6 string concatenating:
function sayHelloPre(text) {
    console.log("Hello " + text + "!");
}

//post ES6 string concatenating (templateLiterals):
const sayHelloPost = (text) => {
    console.log(`Hello Again, ${text}!`);
}

sayHelloPre('React');
sayHelloPost('React');