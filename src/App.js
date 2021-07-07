import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>{count}</div>
      <PersonalDetails />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
