import React from "react";
import classes from "./Card.module.css";

const Card = ({ image, name, author, description, country }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img_wrap}>
        <img src={image} alt={name} />
      </div>

      <div className={classes.desc_wrap}>
        <h4>{name}</h4>
        <p>{author}</p>
        <p>{country}</p>
        <p className={classes.desc}>
          {description.split(" ").splice(0, 10).join(" ") + "..."}
        </p>
      </div>
    </div>
  );
};

export default Card;
