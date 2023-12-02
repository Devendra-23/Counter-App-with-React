import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {count > 0 && <p className="message">Great job! Keep counting!</p>}
    </div>
  );
}

export default App;
