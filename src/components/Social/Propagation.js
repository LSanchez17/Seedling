import { useEffect, useState } from "react"
import Loading from "../utility/Loading";

const Propagation = () => {
    const [newPlants, setNewPlants] = useState();

    useEffect(() => {
        const fetchNewPlants = async () => {

            setNewPlants();
        }
    },[]);

    let displayNewPlants = newPlants.map(plant => {
        return(
            <PlantBubble plantPic={plant.plantPic} plantName={plant.plantName} />
        );
    });

    return(
        <div>
            { displayNewPlants ? displayNewPlants : <Loading />}
        </div>
    )
}