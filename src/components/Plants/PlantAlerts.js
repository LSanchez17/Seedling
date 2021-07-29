import Alert from './Alert';
import { useEffect, useState } from "react";
import Loading from '../utility/Loading';

const PlantAlerts = () => {
    //gets alerts that the user has, and displays them
    //add pagination?*************************************
    const [alerts, setAlerts] = useState([]);

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
                <Alert needs={item} />
            </div>
        )
    })

    return (
        <div>
            {fancyfiedAlerts ? fancyfiedAlerts : <Loading />}
        </div>
    );
};

export default PlantAlerts;