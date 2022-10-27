import "./App.css";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import dataJson from "./data.json";
import NavigationMobile from "./components/NavigationMobile";

import MappedPlanetlanding from "./components/MappedPlanetLanding";

function App() {
  const [data, setData] = useState(dataJson);

  const [navigation, setNavigation] = useState(true);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Antonio", "Spartan"],
      },
    });
  }, []);

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
    if (width > 720) {
      setNavigation(true);
    }
  };

  const responsive = {
    state: width < 720,
  };

  console.log(data);
  return (
    <div>
      <Header navigation={navigation} setNavigation={setNavigation}></Header>

      {navigation && (
        <NavigationMobile
          setNavigation={setNavigation}
          data={data}
        ></NavigationMobile>
      )}

      <MappedPlanetlanding data={data[0]}></MappedPlanetlanding>
    </div>
  );
}

export default App;
