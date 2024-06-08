import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>
      <h1>{count}</h1>
      <button className={classes.value} onClick={increment}>
        <span>increment</span>
      </button>
      <Outlet />
    </div>
  );
};
