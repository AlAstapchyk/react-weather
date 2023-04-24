import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../../api/weather";

const WeatherData = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const fetchData = (latitude, longitude) => {
        const lat = latitude;
        const lon = longitude;

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forcastResponse = await response[1].json();
            console.log(weatherResponse);
            console.log(forcastResponse);

            setCurrentWeather({...weatherResponse });
            setForecast({...forcastResponse });
            })
            .catch(console.log);
    };

    return { currentWeather, forecast, fetchData };
};
export default WeatherData;