import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api/geoDB";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const Search = ({ isHome = true }) => {
  const navigate = useNavigate();

  const loadOptions = (inputValue) => {
    return fetch(GEO_API_URL + inputValue + "&limit=10", geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            return {
              value: { lat: city.latitude, lon: city.longitude },
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.log("some error :("));
  };

  const handleOnChange = (searchData) => {
    console.log("my searchData: ");
    console.log(searchData);

    navigate({
      pathname: "/react-weather/forecast",
      search: `?lat=${searchData.value.lat}&lon=${searchData.value.lon}`,
    });
  };

  const [isMaxWidth_808, setIsMaxWidth_808] = useState(false);
  const [isMaxWidth_648, setIsMaxWidth_648] = useState(false);
  const [isMaxWidth_468, setIsMaxWidth_484] = useState(false);
  const menuHeight = [
    ["8.5rem", "15.25rem"],
    ["7.25rem", "13.5rem"],
    ["5rem", "10rem"],
    ["5.5rem", "10.5rem"],
  ];

  const [menuHeightIndex, setMenuHeightIndex] = useState(0);

  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    const newMenuHeightIndex =
      windowWidth <= 468 ? 3 : windowWidth <= 648 ? 2 : windowWidth <= 808 ? 1 : 0;
    setMenuHeightIndex(newMenuHeightIndex);

    setIsMaxWidth_808(windowWidth <= 808);
    setIsMaxWidth_648(windowWidth <= 648);
    setIsMaxWidth_484(windowWidth <= 468);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const searchCityStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontSize: isMaxWidth_648 ? "1.25rem" : "1.75rem",
      borderRadius: isMaxWidth_468 ? "1rem" : "1.5rem",
      minHeight: isMaxWidth_648 ? "3.5rem" : "4.5rem",
    }),
    option: (styles, state) => ({
      ...styles,
      borderRadius: isMaxWidth_468 ? "0.75rem" : "1rem",
      backgroundColor: state.isFocused && "black",
    }),
    menu: (styles) => ({
      ...styles,
      padding: "0.5rem",
      borderRadius: isMaxWidth_468 ? "1rem" : "1.5rem",
      borderWidth: "0px",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "white",
      textShadow: "2px 2px black",
      fontSize: isMaxWidth_648 ? "1rem" : "1.25rem",
      paddingRight: "0px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: isHome
        ? menuHeight[menuHeightIndex][0]
        : menuHeight[menuHeightIndex][1],

      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        padding: "12px 0px",
        margin: "12px 0px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "white",
        height: "5px",
        borderRadius: "10px",
      },
    }),
  };

  return (
    <AsyncPaginate
      className="search-city"
      placeholder="Search for city"
      debounceTimeout={600}
      loadOptions={loadOptions}
      onChange={handleOnChange}
      styles={searchCityStyles}
    />
  );
};
export default Search;
