import React, { useState } from 'react';

const Button = ()   => {
  const [counter, setCounter] = useState(0);

  const buttonClickHandler = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  return (
    <div className="App">
      <div className="counter">
        {counter}
      </div>
      <button onClick={buttonClickHandler}>CLICK ME!</button>
    </div>
  );
};


export default Button;