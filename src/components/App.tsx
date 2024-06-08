import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Snail from "@/assets/animal.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <img width={100} height={100} src={avatarPng} alt="avatar" />
      <img width={100} height={100} src={avatarJpg} alt="avatar" />
      <div>
        <Snail width={100} height={100} fill="red" />
      </div>
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
