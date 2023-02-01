import React from "react";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./SingleRecipe.module.css";
import axios from "axios";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [flag, setFlag] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  console.log("params", params);
  const navigate = useNavigate();

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(`http://localhost:3001/recipes/${params.singlerecipe}`)
      .then((res) => {
        setRecipe(res.data);
        // setIsLoading(false);
        console.log("checking data", recipe);
        axios
          .get(`https://restcountries.com/v3.1/name/${res.data.country}`)
          .then((res) => {
            setFlag(res.data[0].flags.svg);
            // setIsLoading(false);
          });
      });
  }, []);
  console.log("test", recipe.ingredients);
  return (
    <div>
      <div className={classes.recipe_card}>
        <div className={classes.desc_img_wrap}>
          <div className={classes.img_flag_wrap}>
            <img className={classes.flag_img} src={flag} alt="flag" />
            <img className={classes.img} src={recipe.image} alt="flag" />
          </div>
          <div className={classes.desc_wrap}>
            <h4>{recipe.name}</h4>
            <p>by {recipe.author}</p>
            <p className={classes.desc}>{recipe.description}</p>
          </div>
        </div>
        <div className={classes.ingr_instr_wrap}>
          <div>
            <h4>Ingridients</h4>
            <ul className={classes.ul}>
              {recipe.ingredients.map((ingredient) => (
                <li
                  className={classes.li}
                  key={ingredient.name}
                >{`${ingredient.quantity} ${ingredient.unit}  ${ingredient.name}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Instructions</h4>
            <p>{recipe.instructions}</p>
          </div>
        </div>

        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
};

export default SingleRecipe;
