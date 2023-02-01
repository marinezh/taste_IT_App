import React from "react";
import classes from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>TasteIt</h2>
      <Nav />
    </header>
  );
};

export default Header;
