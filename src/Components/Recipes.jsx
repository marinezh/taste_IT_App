import React from "react";
import { useState, useEffect } from "react";
import classes from "./Recipes.module.css";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => setData(res.data));
  }, []);

  return (
    <div className={classes.recipes_wrap}>
      <h1>All recipes will be here</h1>
      <div className={classes.search_inputs}>
        <div>
          <label htmlFor="input"></label>
          <input type="text" id="input" />
        </div>
        <div>
          <label htmlFor="select"></label>
          <select name="countries" id="select">
            <option value=""></option>
          </select>
        </div>
      </div>
      <div className={classes.cards}>
        {data.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            image={card.image}
            author={card.author}
            country={card.country}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
