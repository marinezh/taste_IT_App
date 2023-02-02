import React from "react";
import videoBG from "../Assets/video.mp4";
import classes from "./Home.module.css";

const Hero = () => {
  return (
    <div>
      <div>
        <video src={videoBG} autoPlay loop muted></video>
      </div>

      <div className={classes.content}>
        <h3>
          TasteIt is a application where people all around the world can share
          their favourite recipes.
        </h3>
        <h3>Made in REACT22S Group with Margit Tennosaar</h3>
      </div>
    </div>
  );
};

export default Hero;
