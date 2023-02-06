import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo_wrap}>
          <span className="material-symbols-outlined">restaurant</span>
          <h2 className={classes.logo}>TasteIT App</h2>
        </div>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
