import React from "react";
import classes from "./Popup.module.css";

const Popup = () => {
  return (
    <div>
      <h2>Your recipe was posted!</h2>
      <div className={classes.buttons}>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Popup;
