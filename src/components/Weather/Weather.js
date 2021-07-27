import DetailWeather from './DetailWeather';
import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        const fetchWeather = async () => {

            setWeather();
        }
    }, []);

    let displayWeather = weather.map(day => {
        <DetailWeather forecast={day} />
    })
    return(
        <div>
            <div>
                {displayWeather ? displayWeather : <div><h3>Loading....</h3></div>}
            </div>
        </div>
    );
};

export default Weather;