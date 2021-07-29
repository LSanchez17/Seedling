// Super proud of this feature when it gets working
// Infinite scroll inside of a div, of your current plants
//loads as you scroll down

import { useEffect, useState } from "react";
import PlantLoader from "./PlantLoader";

const PlantScroll = () => {
    const [userPlants, setUserPlants] = useState();

    useEffect(() => {
        const fetchPlants = async () => {

            setUserPlants();
        }

        fetchPlants();

    }, [])

    let plants = <PlantLoader plantList={userPlants} />

    return (
        <div>
            <div>
                {plants ? plants : <div><h3>Loading...</h3></div>}
            </div>
        </div>
    );
};

export default PlantScroll;