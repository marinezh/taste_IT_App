import React from "react";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./SingleRecipe.module.css";
import axios from "axios";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [flag, setFlag] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes/${params.singlerecipe}`)
      .then((res) => {
        setRecipe(res.data);

        axios
          .get(`https://restcountries.com/v3.1/name/${res.data.country}`)
          .then((res) => {
            setFlag(res.data[0].flags.svg);
          });
      });
  }, [params.singlerecipe]);

  return (
    <div className={classes.single_wrap}>
      <h2 className={classes.recipe_name}>{recipe.name}</h2>
      <div className={classes.recipe_card}>
        <div className={classes.desc_img_wrap}>
          <div className={classes.img_flag_wrap}>
            <img className={classes.flag_img} src={flag} alt="flag" />
            <img className={classes.img} src={recipe.image} alt="flag" />
          </div>
          <div className={classes.desc_wrap}>
            <p>by {recipe.author}</p>
            <p>from {recipe.country}</p>
            <p className={classes.desc}>{recipe.description}</p>
          </div>
        </div>
        <div className={classes.ingr_instr_wrap}>
          <div>
            <h4>Ingredients</h4>
            <ul className={classes.ul}>
              {recipe.ingredients?.map((ingredient) => (
                <li
                  className={classes.li}
                  key={ingredient.name}
                >{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Instructions</h4>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>{" "}
      <button className={classes.button} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default SingleRecipe;
