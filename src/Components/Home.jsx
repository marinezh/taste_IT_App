import React from "react";
import videoBG from "../Assets/video.mp4";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div>
        <div>
          <video src={videoBG} autoPlay loop muted></video>
        </div>

        <div className={classes.content}>
          <h1>TasteIt App</h1>
          <p>
            TasteIt is a application where people all around the world can share
            their favourite recipes.
          </p>
          <p>Made in REACT22S Group with Margit Tennosaar</p>
        </div>
      </div>

      <div className={classes.menu}>
        <div className={classes.menu_card}>
          <h4>Browse Recipes</h4>
          <p>Search for your favorite recipe</p>
          <NavLink to="/allrecipes">All recipes</NavLink>
        </div>
        <div className={classes.menu_card}>
          <h4>Add new recipes</h4>
          <p>Add new recipe from your own country</p>
          <NavLink to="/addrecipe">Add new recipe</NavLink>
        </div>
        <div className={classes.menu_card}>
          <h4>Learn more about our projects</h4>
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
