const DayForecast = ({forecast, currentWeather}) => {

    const timeZone = currentWeather.timezone;
    const currentDate = new Date((currentWeather.dt + timeZone) * 1000);
    let date = new Date();
    let isTomorrow = true;

    const separator = (_date) => {
        return(
            <div className="day-forecast__separator">
                <div className="day-forecast__separator__line"></div>
                <p className="day-forecast__separator__date">{_date}</p>
            </div> 
        );
    }

    const subblock = (timeString, pop, icon, temp) => {
        return (
          <div className="day-forecast__subblock">
            <p>{timeString}</p>
            <p className="text--small">
              {pop >= 0.3 && pop <= 0.9 ? `${Math.round(pop*10)*10}%` : pop < 0.1 ? <br/> : '>90%'}
            </p>
            <img src={process.env.PUBLIC_URL + `/images/icons/${icon}.png`} alt={icon} />
            <p>{Math.round(temp)}°C</p>
          </div>
        );
    };

    const tomorrow = () => {
        isTomorrow = false;
        return('Tomorrow');
    }

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const printDate = (date) => {
        return (daysOfWeek[date.getDay().toString()]
            + " "
            + date.getDate().toString().padStart(2, '0')
            + ' / ' 
            + (date.getMonth() + 1).toString().padStart(2, '0'))
    }

    return(
        <div className="day-forecast__block">
            <div className="horizontal-view">

                <div className="day-forecast__pack" key='200'>
                    {separator('Today')}
                    {subblock( 
                        currentDate.getUTCHours().toString().padStart(2, '0')
                        + ':' 
                        + currentDate.getMinutes().toString().padStart(2, '0'),
                        '',
                        currentWeather.weather[0].icon,
                        currentWeather.main.temp)}
                </div>

                {forecast.list.map( (_, i) => (
                    <div className="day-forecast__pack" key={i+201}>
                        {console.log(forecast.list[i].icon)}
                        {!(date = new Date((forecast.list[i].dt + timeZone) * 1000))}
                        { ( (date.getUTCHours() < 3) && (currentDate.getUTCHours() > date.getUTCHours() || i!==0) ) && (
                            isTomorrow ? 
                            separator(isTomorrow ? tomorrow() : printDate(date))
                            :
                            separator(printDate(date))
                        )}
                        
                        {subblock(date.getUTCHours().toString().padStart(2, '0'),
                            forecast.list[i].pop,
                            forecast.list[i].weather[0].icon,
                            forecast.list[i].main.temp
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}
export default DayForecast;