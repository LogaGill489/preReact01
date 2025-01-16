//Operators and Conditionals help make code more concise.
//these functions are specificly designed to be implemented into a node function and will error out if the return
//is not handled properly.

//default
const hello = () => {
    const isLoggedIn = true;

    if (isLoggedIn) {
      // Shows: Welcome back!
      return <div>Welcome back!</div>;
    }
  
    return <div>Who are you?</div>;
}

//--- ternary operator ---
const helloT1 = () => {
    const isLoggedIn = true;

    // Shows: Welcome back!
    return isLoggedIn ? <div>Welcome back!</div> : <div>Who are you?</div>;
}

//or
const helloT2 = () => {
    const isLoggedIn = true;

    // Shows: Welcome back!
    return <div>{isLoggedIn ? "Welcome back!" : "Who are you?"}</div>;
}


//--- && operator ---
const helloAD = () => {
    const isLoggedIn = true;

    // If true: Welcome back!, if false: nothing
    return <div>{isLoggedIn && "Welcome back!"}</div>;
}


//--- || operator ---
const helloLN = () => {
    const isLoggedIn = true;

    // If true: nothing, if false: Who are you?
    return <div>{isLoggedIn || "Who are you?"}</div>;
}