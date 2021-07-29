import Loading from "../utility/Loading"

const Alert = ({needs}) => {
    //create set of plantNames
    //if set has PlantName, show needs
    //O(n)

    let displayAlerts = needs.map(plant => {
        return(
            <div>
                <h3>{plant.plantName}</h3>
            </div>
        )
    })
    return(
        <div>
            {displayAlerts ? displayAlerts : <Loading />}
        </div>
    );
};

export default Alert;