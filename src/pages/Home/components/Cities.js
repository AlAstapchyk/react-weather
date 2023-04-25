import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const folderPath = `${process.env.PUBLIC_URL}/images/cities/`;
  const citiesArr = [
    {
      name: "New York City",
      country: "United States",
      imagePath: `${folderPath}new-york.webp`,
      latitude: 40.7143,
      longitude: -74.006,
    },
    {
      name: "Paris",
      country: "France",
      imagePath: `${folderPath}paris.jpg`,
      latitude: 48.8534,
      longitude: 2.34,
    },
    {
      name: "Tokyo",
      country: "Japan",
      imagePath: `${folderPath}tokyo.webp`,
      latitude: 35.6895,
      longitude: 139.6917,
    },
    {
      name: "London",
      country: "United Kingdom",
      imagePath: `${folderPath}london.jpeg`,
      latitude: 51.5085,
      longitude: -0.1257,
    },
    {
      name: "Sydney",
      country: "Australia",
      imagePath: `${folderPath}sydney.jpg`,
      latitude: -33.8679,
      longitude: 151.2073,
    },
    {
      name: "Beijing",
      country: "China",
      imagePath: `${folderPath}beijing.jpg`,
      latitude: 39.9075,
      longitude: 116.3972,
    },
    {
      name: "Moscow",
      country: "Russia",
      imagePath: `${folderPath}moscow.jpg`,
      latitude: 55.7522,
      longitude: 37.6156,
    },
    {
      name: "Dubai",
      country: "United Arab Emirates",
      imagePath: `${folderPath}dubai.jpg`,
      latitude: 25.2582,
      longitude: 55.3047,
    },
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      imagePath: `${folderPath}rio-de-janeiro.jpg`,
      latitude: -22.9028,
      longitude: -43.2075,
    },
    {
      name: "Istanbul",
      country: "Turkey",
      imagePath: `${folderPath}istanbul.jpg`,
      latitude: 41.0351,
      longitude: 28.9833,
    },
    {
      name: "Toronto",
      country: "Canada",
      imagePath: `${folderPath}toronto.jpg`,
      latitude: 43.7001,
      longitude: -79.4163,
    },
    {
      name: "Dublin",
      country: "Ireland",
      imagePath: `${folderPath}dublin.jpg`,
      latitude: 53.344,
      longitude: -6.2672,
    },
    {
      name: "Cairo",
      country: "Egypt",
      imagePath: `${folderPath}cairo.jpg`,
      latitude: 30.0626,
      longitude: 31.2497,
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      imagePath: `${folderPath}amsterdam.jpg`,
      latitude: 52.374,
      longitude: 4.8897,
    },
    {
      name: "Mumbai",
      country: "India",
      imagePath: `${folderPath}mumbai.webp`,
      latitude: 19.0144,
      longitude: 72.8479,
    },
    {
      name: "Cape Town",
      country: "South Africa",
      imagePath: `${folderPath}cape-town.jpg`,
      latitude: -33.9258,
      longitude: 18.4232,
    },
    {
      name: "Rome",
      country: "Italy",
      imagePath: `${folderPath}rome.jpg`,
      latitude: 41.8947,
      longitude: 12.4839,
    },
    {
      name: "Seoul",
      country: "South Korea",
      imagePath: `${folderPath}seoul.webp`,
      latitude: 37.5683,
      longitude: 126.9778,
    },
    {
      name: "Bangkok",
      country: "Thailand",
      imagePath: `${folderPath}bangkok.jpg`,
      latitude: 13.75,
      longitude: 100.5167,
    },
    {
      name: "Barcelona",
      country: "Spain",
      imagePath: `${folderPath}barcelona.jpg`,
      latitude: 41.3888,
      longitude: 2.159,
    },
  ];

  const [randomNumbers, setRandomNumbers] = useState([]);
  useEffect(() => {
    const numbers = Array.from(citiesArr, (_, index) => index);
    setRandomNumbers(shuffle(numbers));
  }, []);

  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    const newIndex =
      currentImageIndex === 0 ? citiesArr.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };
  const handleRightClick = () => {
    const newIndex =
      currentImageIndex === citiesArr.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const goToForecast = () => {
    navigate({
      pathname: '/react-weather/forecast',
      search: `?lat=${citiesArr[randomNumbers[currentImageIndex]].latitude}&lon=${citiesArr[randomNumbers[currentImageIndex]].longitude}`,
    });
  }

  return (
    <div className="cities__block">
      <div className="cities__remote">
        <svg
          onClick={handleLeftClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
        </svg>
        <img
          src={
            randomNumbers.length !== 0 &&
            citiesArr[randomNumbers[currentImageIndex]].imagePath
          }
          alt={
            randomNumbers.length !== 0 &&
            citiesArr[randomNumbers[currentImageIndex]].name
          }
        />
        <svg
          onClick={handleRightClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
        </svg>
      </div>

      <p className="cities__city-name">
        {randomNumbers.length !== 0 &&
          citiesArr[randomNumbers[currentImageIndex]].name}
        ,{" "}
        {randomNumbers.length !== 0 &&
          citiesArr[randomNumbers[currentImageIndex]].country}
      </p>
      
      <button className="button--simple" onClick={goToForecast}><p>Check the weather in that city</p></button>
    </div>
  );
};
export default Cities;
