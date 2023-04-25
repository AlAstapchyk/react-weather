import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api/geoDB";
import { useNavigate } from "react-router-dom";

const Search = () => {
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

  const searchCityStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontSize: "2rem",
      borderRadius: "1.5rem",
      minHeight: "5rem",
      msScrollbarTrackColor: "red",
    }),
    option: (styles, state) => ({
      ...styles,
      borderRadius: "1rem",
      backgroundColor: state.isFocused && "black",
      maxHeight: "20rem",
    }),
    menu: (styles) => ({
      ...styles,
      padding: "0.5rem",
      borderRadius: "1.5rem",
      borderWidth: "0px",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "white",
      textShadow: "2px 2px black",
      fontSize: "1.5rem",
      paddingRight: "0px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "20rem",

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
