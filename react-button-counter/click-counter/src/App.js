import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);

  const buttonClickHandler = (props) => {
    const buttonClicked = Button.addEventListener(counter)
    if (buttonClicked) {
      setCounter(counter += 1);
    }
  }
  return (
    <div className="App">
      <button onClick={buttonClickHandler}> { counter } </button>
    </div>
  );
}

export default App;
