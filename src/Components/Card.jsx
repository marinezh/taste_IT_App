import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import axios from "axios";

const Card = ({ id, image, name, author, description, country }) => {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    if (!country.length) return;
    axios
      .get("https://restcountries.com/v3.1/name/" + country)
      .then((response) => setFlag(response.data[0].flags.svg));
  }, [country]);

  return (
    <div className={classes.card}>
      <div className={classes.img_wrap}>
        <img src={image} alt={name} />
      </div>

      <div className={classes.desc_wrap}>
        <h4>{name}</h4>
        <p>{author}</p>

        <p className={classes.desc}>
          {description.split(" ").splice(0, 10).join(" ") + "..."}
        </p>
        <Link to={`${id}`} className={classes.link}>
          See more
        </Link>

        <img className={classes.flag_img} src={flag} alt="flag" />
      </div>
    </div>
  );
};

export default Card;
