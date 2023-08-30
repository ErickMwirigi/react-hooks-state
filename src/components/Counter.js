import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

function EM(){
  const [count , setCount] = useState(0);
  function multiply(){
    setCount(count * 2);
  }

  return <button onClick={multiply}>I have been multilpied {count} times!</button>
}


export default Counter;
