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
      setSearch(res.data);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);

    console.log(e.target.value);
  };

  // if (search.length > 0) {
  //   recipes.filter((country) => {
  //     return country.name.match(search);
  //   });
  // }
  // let filteredSearch = [];
  // if (search.length > 0) {
  //   filteredSearch = recipes.filter((item) => {
  //     item.name.toLowerCase().includes(search);
  //   });

  const filteredSearch = recipes.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });

  // const result = filteredSearch.map((card) => {
  //   return (
  //     <Card
  //       key={card.name}
  //       name={card.name}
  //       image={card.image}
  //       author={card.author}
  //       country={card.country}
  //       description={card.description}
  //     />
  //   );
  // });
  return (
    <div className={classes.recipes_wrap}>
      <h1>All recipes will be here</h1>
      <div className={classes.search_inputs}>
        <div>
          <label htmlFor="input"></label>
          <input type="search" id="input" onChange={searchHandler} />
        </div>
        <div>
          <label htmlFor="select"></label>
          <select name="countries" id="select">
            <option value=""></option>
          </select>
        </div>
      </div>
      <div className={classes.cards}>
        {/* {result} */}
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
