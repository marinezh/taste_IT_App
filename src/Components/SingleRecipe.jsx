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
          .get("https://restcountries.com/v3.1/name/" + recipe.country)
          .then((res) => {
            setFlag(res.data[0].flags.svg);
            // setIsLoading(false);
          });
      });
  }, []);

  return (
    <div>
      <div className={classes.card}>
        {/* <div className={classes.img_wrap}>
          <img src={recipe.image} alt={recipe.name} />
        </div> */}

        <div className={classes.desc_wrap}>
          <h4>{recipe.name}</h4>
          <p>{recipe.author}</p>

          <p className={classes.desc}>{recipe.description}</p>
          <button onClick={() => navigate(-1)}>Go back</button>

          <img className={classes.flag_img} src={recipe.flag} alt="flag" />
          <img className={classes.img} src={recipe.image} alt="flag" />
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
