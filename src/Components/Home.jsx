import React from "react";
import videoBG from "../Assets/video.mp4";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <video src={videoBG} autoPlay muted></video>
      <div className={classes.content}>
        <h1>TasteIt App</h1>
        <p>
          TasteIt is a application where people all around the world can share
          their favourite recipes.
        </p>
        <p>Made in REACT22S Group with Margit Tennosaar</p>
      </div>
      <div className={classes.menu}>
        <div className={classes.menu_card}>
          <h2>Browse Recipes</h2>
          <p>Search for your favorite recipe</p>
          <NavLink to="/allrecipes">All recipes</NavLink>
        </div>
        <div className={classes.menu_card}>
          <h2>Add new recipes</h2>
          <p>Add new recipe from your own country</p>
          <NavLink to="/addrecipe">Add new recipe</NavLink>
        </div>
        <div className={classes.menu_card}>
          <h2>Learn more about our projects</h2>
          <p>Visit our programme homepage</p>
          <a
            href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
            target="_blank"
            rel="noreferrer"
          >
            BC Helsinki hompepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
