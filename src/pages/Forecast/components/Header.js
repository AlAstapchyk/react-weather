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

  return (
    <>
      <div className="header">
        <div className="header__left">
          <p className="text--large header__place">
            {currentWeather.name ? currentWeather.name + ", " : "Unknown"}{" "}
            {currentWeather.sys.country}
          </p>
          <p className="text--large header__date">{printDate(currentWeather.dt)}</p>
          <p className="text--large header__brief">{currentWeather.weather[0].main}</p>
        </div>
        <div className="header__right">
          <p className="text--superlarge header__temp">
            {Math.round(currentWeather.main.temp)}°C
          </p>
          <p className="text--large header__feel">
            Feels like {Math.round(currentWeather.main.feels_like)}°C
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
