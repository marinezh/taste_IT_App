import React, { useState } from "react";
import classes from "./NewRecipe.module.css";
import axios from "axios";

const NewRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
    ingredients: [{ ingredient: "", quantity: "" }],
    instructions: "",
  });

  const changeHandler = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3001/recipes", newRecipe)
      .then(window.location.reload())
      .catch((error) => alert(error.response.data));
  };

  return (
    <div className={classes.new_recipe_wrap}>
      <h1>Add new recipe here</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={changeHandler} type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input onChange={changeHandler} type="text" id="author" name="author" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          onChange={changeHandler}
          type="text"
          id="country"
          name="country"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          onChange={changeHandler}
          type="text"
          id="description"
          name="description"
        />
      </div>
      <div>
        <label htmlFor="img">Image</label>
        <input onChange={changeHandler} type="text" id="img" name="image" />
      </div>
      <div>
        <p>Ingredients</p>
        <div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              onChange={changeHandler}
              type="text"
              id="quantity"
              name="quantity"
            />
          </div>
          <div>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              onChange={changeHandler}
              type="text"
              id="ingredient"
              name="ingredient"
            />
          </div>
        </div>
        <button>Add more</button>
      </div>
      <div>
        <label htmlFor="instr">Instructions</label>
        <textarea
          onChange={changeHandler}
          id="instr"
          rows="4"
          cols="50"
          name="instructions"
        ></textarea>
      </div>
      <button onClick={postHandler}>Post recipe</button>
    </div>
  );
};

export default NewRecipe;
