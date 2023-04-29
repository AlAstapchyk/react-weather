const Header = ({ currentWeather }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const printDate = (unix) => {
    const date = new Date((unix + currentWeather.timezone) * 1000);

    return (
      daysOfWeek[date.getDay().toString()] +
      ", " +
      date.getDate().toString().padStart(2, "0") +
      " " +
      months[date.getMonth() + 1]
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

  return (
    <>
      <div className="header">
        <div className="header__left">
          <p className="text--large">
            {currentWeather.name ? currentWeather.name + ", " : "Unknown"}{" "}
            {currentWeather.sys.country}
          </p>
          <p className="text--large">{printDate(currentWeather.dt)}</p>
          <p className="text--large">{currentWeather.weather[0].main}</p>
        </div>
        <div className="header__right">
          <p className="text--superlarge">
            {Math.round(currentWeather.main.temp)}°C
          </p>
          <p className="text--large">
            Feels like {Math.round(currentWeather.main.feels_like)}°C
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
