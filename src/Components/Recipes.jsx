import React from "react";
import { useState, useEffect } from "react";
import classes from "./Recipes.module.css";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      setRecipes(res.data);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filteredSearch = recipes.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });

  return (
    <div className={classes.recipes_wrap}>
      <h1>All recipes</h1>

      <div className={classes.search_inputs}>
        <div>
          <label htmlFor="input"></label>
          <input type="search" id="input" onChange={searchHandler} />
        </div>
      </div>
      <div className={classes.cards}>
        {filteredSearch.length > 0 ? (
          filteredSearch.map((card) => {
            return (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                author={card.author}
                country={card.country}
                description={card.description}
                flag={card.flag}
              />
            );
          })
        ) : (
          <p>nothing found</p>
        )}
      </div>
    </div>
  );
};
export default Recipes;
