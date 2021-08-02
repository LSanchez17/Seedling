import { useEffect, useState } from "react";
import Loading from "../utility/Loading";
import {DUMMYWEATHER} from '../../__tests__/DummyJSON';

const WeatherMini = () => {
    //only get two-day forecast
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            //get weather, set it and forget it

            setWeather(DUMMYWEATHER);
        }

        fetchWeather()
    }, [])

    const forecast = weather.map(day => {
        console.log(day)
        return (
            <div>
                <h3>Date: {day[0].Date}</h3>
                <h3>Weather: {day[1].Weather} </h3>
                <h3>Sunrise: {day[2].Sunrise}</h3>
                <h3>Sunset: {day[3].Sunset}</h3>
                <h3>Alerts: {day[4].Alerts}</h3>
                <p>Forecast Notes: {day[5].Notes}</p>
            </div>
        )
    })

    return(
        <div>
            {forecast ? forecast : <Loading />}
        </div>
    );
};

export default WeatherMini;