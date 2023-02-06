import React from "react";
import videoBG from "../Assets/video1.mp4";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div>
        <video src={videoBG} autoPlay loop muted></video>
      </div>

      <div className={classes.hero_content}>
        <h3 className={classes.hero_title}>
          Application where people all around the world can share their
          favourite recipes.
        </h3>
        <p className={classes.hero_title}>
          Made in REACT22S Group with Margit Tennosaar
        </p>
      </div>
    </div>
  );
};

export default Hero;
