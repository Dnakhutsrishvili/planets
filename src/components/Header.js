import React from "react";
import classes from "./Header.module.css";
import bulk from "../Assets/img/icon-hamburger.svg";

function Header(props) {
  return (
    <div className={classes.HeaderParent}>
      <div>
        <h1 className={classes.title}>THE PLANETS</h1>
      </div>
      <div
        className={classes.bulker}
        onClick={() => {
          props.setNavigation(!props.navigation);
        }}
      >
        <img className={classes.bulk} src={bulk} alt="bulk"></img>
      </div>
    </div>
  );
}

export default Header;
