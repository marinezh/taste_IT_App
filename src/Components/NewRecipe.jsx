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
    ingredients: [],
    instructions: "",
  });

  const [addIngredient, setAddIng] = useState([
    { quantity: "", unit: "", ingredient: "" },
  ]);

  const addHandler = () => {
    setAddIng([...addIngredient, { quantity: "", unit: "", ingredient: "" }]);
  };

  const addNewIngredient = (event, index) => {
    [...addIngredient][index][event.target.name] = event.target.value;
    setAddIng([...addIngredient]);
    setNewRecipe({ ...newRecipe, ingredients: addIngredient });
  };

  const changeHandler = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3001/recipes", newRecipe)
      .then(() => {
        window.location.reload();
        alert("done");
      })

      .catch((error) => alert(error.response.data));
  };

  return (
    <>
      <h1 className={classes.title}>Add new recipe here</h1>
      <form className={classes.new_recipe_wrap} onSubmit={postHandler}>
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="author">Author</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="author"
            name="author"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="country">Country</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="country"
            name="country"
          />
        </div>
        <div className={classes.textarea}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            id="description"
            name="description"
            onChange={(e) => changeHandler(e)}
          ></textarea>
        </div>
        <div className={classes.input}>
          <label htmlFor="img">Image</label>
          <input
            onChange={(e) => changeHandler(e)}
            type="text"
            id="img"
            name="image"
          />
        </div>
        <div>
          <p>Ingredients: </p>
          {addIngredient.map((ingredient, index) => (
            <div key={index} className={classes.ing_inputs}>
              <div className={classes.input1}>
                <label htmlFor="quantity">Quantity</label>
                <input
                  onChange={(e) => addNewIngredient(e, index)}
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={ingredient.quantity}
                />
              </div>
              <div className={classes.input2}>
                <label htmlFor="input">Unit</label>
                <input
                  onChange={(e) => addNewIngredient(e, index)}
                  type="text"
                  id="unit"
                  name="unit"
                  value={ingredient.unit}
                />
              </div>
              <div className={classes.input3}>
                <label htmlFor="ingredient">Ingredient</label>
                <input
                  onChange={(e) => addNewIngredient(e, index)}
                  type="text"
                  id="ingredient"
                  name="ingredient"
                  value={ingredient.ingredient}
                />
              </div>
            </div>
          ))}
          <button
            className={classes.button}
            type="button"
            onClick={(e) => addHandler(e)}
          >
            Add more
          </button>
        </div>
        <div className={classes.textarea}>
          <label htmlFor="instr">Instructions</label>
          <textarea
            onChange={(e) => changeHandler(e)}
            id="instr"
            rows="4"
            cols="50"
            name="instructions"
          ></textarea>
        </div>
        <button className={classes.button} type="submit">
          Post recipe
        </button>
      </form>
    </>
  );
};

export default NewRecipe;
