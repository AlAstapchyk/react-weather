import { useEffect, useRef } from "react";

const AdditionalInfo = ({ forecast, currentWeather }) => {
  const timePart = currentWeather.sys.sunset - currentWeather.sys.sunrise;
  const timePos = currentWeather.dt - currentWeather.sys.sunrise;

  const SunSvg = () => {
    const pos = (180 * timePos) / timePart;
    const sunTransform = `rotate(${pos} 0 0) translate(-45 70) scale(0.8 0.8)`;

    return (
      <svg className="sun-direct__svg" viewBox="0 0 100 100" width="100%">
        <circle
          cx="50"
          cy="100"
          r="75"
          stroke="white"
          stroke-width="1"
          stroke-dasharray="15, 3"
          fill="none"
          transform-origin="50 100"
        />
        <path
          d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
          stroke="white"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          transform-origin="50 100"
          transform={sunTransform}
        />
      </svg>
    );
  };

  const timeFormat = (unix, isTimeZone = true) => {
    const date = new Date(
      (unix + (isTimeZone ? currentWeather.timezone : 0)) * 1000
    );
    return (
      date.getUTCHours().toString().padStart(2, "0") +
      ":" +
      date.getUTCMinutes().toString().padStart(2, "0")
    );
  };

  const refMainDiv = useRef();

  useEffect(() => {
    refMainDiv.current.className += " to-top";
  }, []);

  return (
    <div className="add-info-weather from-bottom" ref={refMainDiv}>
      <div className="add-info-weather__block--small">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Environment / Water_Drop">
            <path
              id="Vector"
              d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <p className="text--small">Humidity</p>
        <p>{currentWeather.main.humidity}%</p>
      </div>

      <div className="add-info-weather__block--small">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8H10C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 16H15C16.6569 16 18 17.3431 18 19C18 20.6569 16.6569 22 15 22C13.3431 22 12 20.6569 12 19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 12H19C20.6569 12 22 10.6569 22 9C22 7.34315 20.6569 6 19 6C17.3431 6 16 7.34315 16 9"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text--small">Wind</p>
        <p>
          {currentWeather.wind.speed} m/s, {currentWeather.wind.deg}°
        </p>
      </div>

      <div className="add-info-weather__block--small">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="File / Cloud">
            <path
              id="Vector"
              d="M19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19L6 19.0001C3.23858 19.0001 1 16.7613 1 13.9999C1 11.3498 3.06206 9.18144 5.66895 9.01082C6.79019 6.64004 9.20335 5 12 5C15.5267 5 18.4447 7.60802 18.9297 11.0006C18.9532 11.0002 18.9764 11 19 11Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <p className="text--small">Cloudiness</p>
        <p>{currentWeather.clouds.all}%</p>
      </div>

      <div className="add-info-weather__block--small">
        <svg
          className="icon-medium"
          fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          color="white"
        >
          <g fill="white">
            <g>
              <path
                d="M256,0C114.51,0,0,114.497,0,256c0,141.491,114.497,256,256,256c141.49,0,256-114.497,256-256
			C512,114.509,397.503,0,256,0z M256,478.609c-122.746,0-222.609-99.862-222.609-222.609S133.254,33.391,256,33.391
			S478.609,133.254,478.609,256S378.746,478.609,256,478.609z"
              />
            </g>
          </g>
          <g fill="white">
            <g>
              <path
                d="M256,66.783C151.29,66.783,66.783,151.738,66.783,256c0,48.619,18.872,97.248,55.421,133.797
			c6.52,6.52,17.091,6.52,23.611,0l23.611-23.611c6.52-6.519,6.52-17.09,0-23.611c-6.519-6.52-17.09-6.52-23.611,0l-11.177,11.177
			c-19.241-23.851-30.408-52.1-33.501-81.056h15.734c9.22,0,16.696-7.475,16.696-16.696c0-9.22-7.475-16.696-16.696-16.696h-15.725
			c3.094-28.955,14.261-57.198,33.5-81.05l11.17,11.169c6.52,6.52,17.091,6.52,23.611,0c6.519-6.519,6.519-17.091,0-23.611
			l-11.175-11.175c23.276-18.804,51.227-30.356,81.054-33.5v15.732c0,9.22,7.475,16.696,16.696,16.696
			c9.22,0,16.696-7.475,16.696-16.696v-15.731c29.827,3.144,57.777,14.698,81.054,33.5l-72.032,72.032
			c-7.699-4.03-16.444-6.323-25.719-6.323c-30.687,0-55.652,24.966-55.652,55.652c0,30.687,24.966,55.652,55.652,55.652
			c30.687,0,55.652-24.966,55.652-55.652c0-9.275-2.293-18.02-6.323-25.718l72.026-72.026c19.239,23.85,30.406,52.094,33.5,81.05
			H395.13c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h15.734c-3.093,28.956-14.26,57.206-33.501,81.056
			l-11.177-11.177c-6.519-6.519-17.091-6.519-23.611,0c-6.52,6.52-6.52,17.091,0,23.611l23.611,23.611
			c6.52,6.52,17.091,6.52,23.611,0c36.482-36.483,55.421-85.084,55.421-133.798C445.217,151.681,360.676,66.783,256,66.783z
			 M256,278.261c-12.275,0-22.261-9.986-22.261-22.261c0-12.275,9.986-22.261,22.261-22.261c12.275,0,22.261,9.986,22.261,22.261
			C278.261,268.275,268.275,278.261,256,278.261z"
              />
            </g>
          </g>
          <g fill="white">
            <g>
              <path
                d="M272.696,345.043h-33.391c-27.618,0-50.087,22.469-50.087,50.087s22.469,50.087,50.087,50.087h33.391
			c27.618,0,50.087-22.469,50.087-50.087S300.314,345.043,272.696,345.043z M272.696,411.826h-33.391
			c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696h33.391c9.206,0,16.696,7.49,16.696,16.696
			S281.902,411.826,272.696,411.826z"
              />
            </g>
          </g>
        </svg>
        <p className="text--small">Atmospheric presure</p>
        <p>{currentWeather.main.pressure} hPa</p>
      </div>

      <div className="add-info-weather__block--half">
        <div className="add-info-weather__day-light-hours">
          <SunSvg />
          <div className="under-sun-direct__div">
            <div>
              <p className="text--small">Sunrise</p>
              <p className="sunrise__time" align="center">
                {timeFormat(currentWeather.sys.sunrise)}
              </p>
            </div>
            <div>
              <p className="text--small">Daylight hours</p>
              <p align="center">{timeFormat(timePart, false)}</p>
            </div>
            <div>
              <p className="text--small">&nbsp;Sunset</p>
              <p className="sunset__time" align="center">
                {timeFormat(currentWeather.sys.sunset)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdditionalInfo;
