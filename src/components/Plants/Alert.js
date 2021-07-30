import { useEffect } from "react";
import Loading from "../utility/Loading"

const Alert = ({needs}) => {
    // create set of plantNames
    // if set has PlantName, show needs
    // O(n)

    let plantsWithNeeds = new Map();

    useEffect(() => {
        for(let plant in needs){
            if(!plantsWithNeeds.has(plant)){
                plantsWithNeeds.set(plant, needs[plant]);
            }
        }
    });

    let displayAlerts = plantsWithNeeds.forEach(plant => {
        return(
            <div>
                <h2>Needs:</h2>
                <p>{plant}</p>
            </div>
        );
    });

    return(
        <div>
            {displayAlerts ? displayAlerts : <Loading />}
        </div>
    );
};

export default Alert;