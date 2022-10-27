import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../Assets/img/icon-chevron.svg";
import classes from "./NavigationMobile.module.css";

function NavigationMobile(props) {
  const colors = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#FCCB6B",
    "#497EFA",
  ];

  let navigate = useNavigate();

  return (
    <div className={classes.parent}>
      <div>
        <h1 className={classes.title}>THE PLANETS</h1>
      </div>
      {props.data.map((item, index) => {
        return (
          <div
            onClick={() => {
              navigate(`/planets/${index + 1}`);
              props.setNavigation(false);
            }}
            key={index}
            className={classes.mappedContainer}
          >
            <div className={classes.splitter}>
              <div
                style={{ backgroundColor: colors[index] }}
                className={classes.sircle}
              ></div>

              <p className={classes.name}>{item.name}</p>
            </div>
            <img className={classes.icon} src={icon} alt="icon"></img>
          </div>
        );
      })}
    </div>
  );
}

export default NavigationMobile;
