import { useEffect, useState } from "react";

const WeatherMini = () => {
    //only get two-day forecast
    const [weather, setWeather] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            //get weather, set it and forget it

            setWeather();
        }

        fetchWeather()
    }, [])

    const forecast = weather.map(day => {
        return (
            <div>
                <h3>Date: </h3>
                <h3>Weather: </h3>
                <h3>Sunrise: </h3>
                <h3>Sunset: </h3>
                <h3>Alerts: </h3>
                <p>Forecast Notes: </p>
            </div>
        )
    })

    return(
        <div>
            {forecast ? forecast : <div><h3>Loading...</h3></div>}
        </div>
    );
};

export default WeatherMini;