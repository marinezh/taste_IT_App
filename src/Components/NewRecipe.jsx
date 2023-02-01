import React from "react";
import classes from "./NewRecipe.module.css";

const NewRecipe = () => {
  return (
    <div className={classes.new_recipe_wrap}>
      <h1>Add new recipe here</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div>
        <label htmlFor="description">Country</label>
        <input type="text" id="description" />
      </div>
    </div>
  );
};

export default NewRecipe;
