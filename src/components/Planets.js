import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataJson from "../data.json";
import NavigationMobile from "../components/NavigationMobile";
import Header from "./Header";
import MappedPlanet from "./MappedPlanet";

function Planets() {
  const params = useParams();
  const [navigation, setNavigation] = useState(false);
  console.log(params.PlanetsId > 0);

  const [width, setWindowWidth] = useState(0);
  console.log(navigation);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    state: width > 720,
  };
  console.log(responsive.state);
  return (
    <div>
      <Header navigation={navigation} setNavigation={setNavigation}></Header>
      {navigation ? (
        <NavigationMobile
          setNavigation={setNavigation}
          data={dataJson}
        ></NavigationMobile>
      ) : responsive.state ? (
        <NavigationMobile
          setNavigation={setNavigation}
          data={dataJson}
        ></NavigationMobile>
      ) : (
        <div> </div>
      )}
      <MappedPlanet data={dataJson[params.PlanetsId - 1]}></MappedPlanet>
    </div>
  );
}

export default Planets;
