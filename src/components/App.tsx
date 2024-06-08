import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Snail from "@/assets/animal.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  // tree shaking
  // unused code does not appear in bundle file
  // if it's a desktop platform everything that is in if with mobile
  // will not be included to bundle file
  if (__PLATFORM__ === "desktop") {
    // return <div>ISDESKTOPPLATFORM</div>;
  }

  if (__PLATFORM__ === "mobile") {
    // return <div>ISMOBILEPLATFORM</div>;
  }

  if (__ENV__ === "development") {
    // addDevtools()
  }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <img width={100} height={100} src={avatarPng} alt="avatar" />
      <img width={100} height={100} src={avatarJpg} alt="avatar" />
      <div>
        <Snail width={100} height={100} fill="magenta" />
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
