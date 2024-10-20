import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //Add value to the count
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  //Decrease the value to the count
  const decreaseValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Shuvkant Chaudhary Phanait</h1>
      <h4>Count: {count}</h4>
      <p>
        I am currently enrolled in Computer Engineering at Purwanchal Campus
      </p>
      <button onClick={addValue}>Add Count</button>
      <br />
      <button onClick={decreaseValue}>Decrease Count</button>
    </>
  );
}

export default App;
