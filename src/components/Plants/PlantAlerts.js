import { useEffect, useState } from "react"

const PlantAlerts = () => {
    //gets alerts that the user has, and displays them
    //add pagination?*************************************
    const [alerts, setAlerts] = useState();

    useEffect(() => {
        const retrieveUserAlerts = async () => {
            //get user alerts and save them

            setAlerts();
        }

        retrieveUserAlerts();
    }, []);

    let fancyfiedAlerts = alerts.map(item => {
        return(
            <div>
                <Alert plantName={item.plantName} needs={item.plantNeeds} />
            </div>
        )
    })

    return (
        <div>
            {fancyfiedAlerts ? fancyfiedAlerts : <div><h2>Loading...</h2></div>}
        </div>
    );
};

export default PlantAlerts;