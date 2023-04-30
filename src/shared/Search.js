import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api/geoDB";
import { useNavigate } from "react-router-dom";
import {useEffect , useState} from "react"

const Search = ( {isHome = true} ) => {
  const navigate = useNavigate();

  const loadOptions = (inputValue) => {
    return fetch(GEO_API_URL + inputValue + "&limit=10", geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            return {
              value: {lat: city.latitude, lon: city.longitude},
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
      pathname: '/react-weather/forecast',
      search: `?lat=${searchData.value.lat}&lon=${searchData.value.lon}`,
    });
  };

  const [isMaxWidth_808, setIsMaxWidth_808] = useState(false);
  const [isMaxWidth_648, setIsMaxWidth_648] = useState(false);
  const [isMaxWidth_484, setIsMaxWidth_484] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMaxWidth_808(window.innerWidth <= 808);
      setIsMaxWidth_648(window.innerWidth <= 648);
      setIsMaxWidth_484(window.innerWidth <= 484);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const searchCityStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontSize: isMaxWidth_648 ? "1.25rem" : "1.75rem",
      borderRadius: isMaxWidth_484 ? "1rem" : "1.5rem",
      minHeight: isMaxWidth_648 ? "3.5rem" : "4.5rem",
    }),
    option: (styles, state) => ({
      ...styles,
      borderRadius: "1rem",
      backgroundColor: state.isFocused && "black",
    }),
    menu: (styles) => ({
      ...styles,
      padding: "0.5rem",
      borderRadius: isMaxWidth_484 ? "1rem" : "1.5rem",
      borderWidth: "0px",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "white",
      textShadow: "2px 2px black",
      fontSize: "1.25rem",
      paddingRight: "0px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: (isHome ? (isMaxWidth_648 ? "5rem" : (isMaxWidth_808 ? "7.25rem" : "8.5rem")) : (isMaxWidth_648 ? "10rem" : (isMaxWidth_808 ? "13.5rem" : "15.25rem"))),

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
