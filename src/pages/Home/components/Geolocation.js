import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Geolocation = () => {
  const navigate = useNavigate();
  const refMainDiv = useRef();

  useEffect(() => {
    refMainDiv.current.className += " to-top";
  }, []);

  const findGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          navigate({
            pathname: "/react-weather/forecast",
            search: `?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          });
        },
        (error) => console.error(error)
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="geolocation__block from-bottom" ref={refMainDiv}>
      <p className="text--big" align="center">
        Enter the name of the city in the search bar or give permission to
        process your geodata.
      </p>
      <button className="button--simple" onClick={findGeolocation}>
        <p>Check the weather in your location</p>
      </button>
    </div>
  );
};
export default Geolocation;
