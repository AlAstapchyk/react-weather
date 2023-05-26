import "./Forecast.scss";
import Search from "../../shared/Search";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import WeatherData from "./components/weatherData";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "../../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboveBlock from "../../shared/AboveBlock";

function Forecast() {
  const { currentWeather, forecast, fetchData } = WeatherData();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    fetchData(lat, lon);
  }, [location]);

  return (
    <>
      <Search isHome={false} />

      {currentWeather != null && currentWeather != null && (
        <>
          <Header currentWeather={currentWeather} />

          <DayForecast forecast={forecast} currentWeather={currentWeather} />

          <AboveBlock>ADDITIONAL INFO</AboveBlock>
          <AdditionalInfo forecast={forecast} currentWeather={currentWeather} />
        </>
      )}
      <Footer />
    </>
  );
}

export default Forecast;
