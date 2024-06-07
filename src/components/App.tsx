import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>
        <span>increment</span>
      </button>
    </div>
  );
};
