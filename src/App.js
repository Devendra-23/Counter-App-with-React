// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleReset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="App">
//       <h1>DevCounter</h1>
//       <div className="counter-container">
//         <p>Count: {count}</p>
//         <button onClick={handleIncrement}>+</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//       {count > 0 && <p className="message">OM SHREE SHANESHWARAY NAMAHA</p>}
//       {count > 0 && <p className="message"> ॐ शनैश्वराय नम:</p>}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#fff78a");

  const handleIncrement = () => {
    setCount(count + 1);
    // Toggle between two colors on each click
    setBackgroundColor((prevColor) =>
      prevColor === "#fff78a" ? "#5C8374" : "#fff78a"
    );
  };

  const handleReset = () => {
    setCount(0);
    setBackgroundColor("#fff78a"); // Reset background color to the initial color
  };

  return (
    <div className="App" style={{ backgroundColor }}>
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
