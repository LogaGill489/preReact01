//basis of every react application is components
//this is either Javascript's functions or classes

// ----- function declarations -----
//camelCase
//javascript function, returns a valid JavaScript type
function javaFunc() {
    return 'Hello World';
}

//pascal case
//React function, returns a JSX element
function ReactComponent(props) {
    return <h1>{props.content}</h1>;
}

// ------ arrow declarations ------
//works the same as the react function, only using the arrow notation
const ReactComponent2 = (props) => {
    return <h1>{props.content}</h1>;
};

//similarily, this can be written as a shortened syntax
const ReactComponent3 = (props) => <h1>{props.content}</h1>;

/* 
In the last example we are using several shorthands that arrow functions allow:

1. No parentheses around a single parameter
2. Implicit return (as compared to using the "return" keyword)
3. No curly braces for function body
*/