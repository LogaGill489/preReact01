//asynchronous code is code that takes a set period of time to complete.
//It runs in the background, allowing other code to run at once (similar to tasks in C#).
//This is mostly relevent when changing or getting data from an external API like Fetch API.
//promises make asynchronous code more readable and more akin to synchronous code.
//This is done using callbacks, i.e. .then() and .catch().

//Here is an example using react:
import React from "react";

const App = () => {
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    /* 
      The first .then() lets us get JSON data from the response.
      The second .then() gets the url to my avatar and puts it in state. 
    */
    fetch("https://api.github.com/users/logagill489")
      .then((response) => response.json())
      .then((data) => setAvatar(data.avatar_url))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return <img src={avatar} alt="Logan Gillett" />;
};

//export default App;


//alternatively, using the keyword await inside an async function works too:
const App2 = () => {
    const [avatar, setAvatar] = React.useState("");
React.useEffect(() => {
      //Note that because the function passed to useEffect cannot be async, we must create a separate function for our promise to be resolved in (fetchAvatar).
    async function fetchAvatar() {
      const response = await fetch("https://api.github.com/users/logagill489");
      const data = await response.json();
      setAvatar(data.avatar_url);
    }

    fetchAvatar();
  }, []);

  return <img src={avatar} alt="Logan Gillett" />;
};

export default App2;