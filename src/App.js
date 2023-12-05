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
      <h1>DevCounter</h1>
      <div className="counter-container">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {count > 0 && <p className="message">OM SHREE SHANESHWARAY NAMAHA</p>}
      {count > 0 && <p className="message"> ॐ शनैश्वराय नम:</p>}
    </div>
  );
}

export default App;
