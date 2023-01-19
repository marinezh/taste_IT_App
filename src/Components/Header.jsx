import React from "react";
import classes from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Header</h1>
      <Nav />
    </div>
  );
};

export default Header;
