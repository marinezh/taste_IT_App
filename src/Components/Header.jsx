import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <h2 className={classes.logo}>
          <span class="material-symbols-outlined">restaurant</span> TasteIT App
        </h2>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
