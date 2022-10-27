import React, { useState } from "react";
import classes from "./MappedPlanet.module.css";
import dataJson from "../data.json";
import { useParams } from "react-router-dom";
import icon from "../Assets/img/icon-source.svg";

function MappedPlanetLanding(props) {
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
  const params = useParams();
  const [section, setSection] = useState({ section: "Overview" });

  return (
    <div className={classes.container}>
      <ul className={classes.NavParent}>
        <li
          style={
            section.section === "Overview"
              ? {
                  opacity: 1,
                  color: "white",
                  borderBottom: `4px solid ${colors[0]}`,
                  paddingBottom: "2rem",
                  marginBottom: "-2rem",
                }
              : {}
          }
          className={classes.NavChaild}
          onClick={() => {
            setSection({ section: "Overview" });
          }}
        >
          OVERVIEW
        </li>
        <li
          style={
            section.section === "STRUCTURE"
              ? {
                  opacity: 1,
                  color: "white",
                  borderBottom: `4px solid ${colors[0]}`,
                  paddingBottom: "2rem",
                  marginBottom: "-2rem",
                }
              : {}
          }
          className={classes.NavChaild}
          onClick={() => {
            setSection({ section: "STRUCTURE" });
          }}
        >
          STRUCTURE
        </li>
        <li
          style={
            section.section === "SURFACE"
              ? {
                  opacity: 1,
                  color: "white",
                  borderBottom: `4px solid ${colors[0]}`,
                  paddingBottom: "2rem",
                  marginBottom: "-2rem",
                }
              : {}
          }
          className={classes.NavChaild}
          onClick={() => {
            setSection({ section: "SURFACE" });
          }}
        >
          SURFACE
        </li>
      </ul>
      <div className={classes.responsivePrent}>
        <div className={classes.imgParent}>
          <img
            className={classes.planetImg}
            src={
              section.section === "Overview"
                ? "." + props.data.images.planet
                : section.section === "STRUCTURE"
                ? "." + props.data.images.internal
                : "." + props.data.images.planet
            }
            alt="planet"
          ></img>
          {section.section === "SURFACE" && (
            <img
              className={classes.geology}
              src={"." + props.data.images.geology}
              alt="geology"
            ></img>
          )}
        </div>

        <div className={classes.flex}>
          <div className={classes.align}>
            <h1 className={classes.title}>{props.data.name}</h1>
            <p className={classes.content}>
              {section.section === "Overview"
                ? props.data.overview.content
                : section.section === "STRUCTURE"
                ? props.data.structure.content
                : props.data.geology.content}
            </p>
            <div className={classes.sourceParent}>
              <p>Source : </p>
              <a
                className={classes.link}
                href={
                  section.section === "Overview"
                    ? props.data.overview.source
                    : section.section === "STRUCTURE"
                    ? props.data.structure.source
                    : props.data.geology.source
                }
              >
                Wikipedia
              </a>
              <img src={icon} alt="icon"></img>
            </div>
          </div>
          <div className={classes.btnParent}>
            <button
              onClick={() => {
                setSection({ section: "Overview" });
              }}
              className={classes.btn}
            >
              <span className={classes.span}>01</span> OVERVIEW
            </button>
            <button
              onClick={() => {
                setSection({ section: "STRUCTURE" });
              }}
              className={classes.btn}
            >
              <span className={classes.span}>02</span>Internal Structure
            </button>
            <button
              onClick={() => {
                setSection({ section: "SURFACE" });
              }}
              className={classes.btn}
            >
              <span className={classes.span}>03</span>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className={classes.lastParent}>
        <div className={classes.lastChild}>
          <p className={classes.first}>ROTATION TIME</p>
          <p className={classes.second}>{props.data.rotation}</p>
        </div>
        <div className={classes.lastChild}>
          <p className={classes.first}>REVOLUTION TIME</p>
          <p className={classes.second}>{props.data.radius}</p>
        </div>
        <div className={classes.lastChild}>
          <p className={classes.first}>RADIUS</p>
          <p className={classes.second}>{props.data.revolution}</p>
        </div>
        <div className={classes.lastChild}>
          <p className={classes.first}>AVERAGE TEMP.</p>

          <p className={classes.second}>{props.data.temperature}</p>
        </div>
      </div>
    </div>
  );
}

export default MappedPlanetLanding;
