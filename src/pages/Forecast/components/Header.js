const Header = ({currentWeather}) => {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <p className="text--large">{currentWeather.name ? currentWeather.name + ", " : "Unknown"} {currentWeather.sys.country}</p>
                    <p className="text--large">Now</p>
                    <p className="text--large">{currentWeather.weather[0].main}</p>
                </div>
                <div className="header__right">
                    <p className="text--superlarge">{Math.round(currentWeather.main.temp)}°C</p>
                    <p className="text--large">Feels like {Math.round(currentWeather.main.feels_like)}°C</p>
                </div>
            </div>
        </>
    );
}
export default Header;