import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allrecipes">All Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/addrecipe">Add New Recipe</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
