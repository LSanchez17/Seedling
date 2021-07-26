import { useEffect, useState } from "react";

const ProfileStats = () => {
    //returns stats for this profile
    const [stats, setStats] = useState();

    useEffect(() => {
        const getStats = async () => {
            //fetch stats for this profile upon loading...

            setStats();
        }
    }, []);

    return(
        <div>
            { stats ?
                <section>
                    <div>
                        <h3>Plants: </h3>
                    </div>
                    <div>
                        <h3>Plant Friends: </h3>
                    </div>
                    <div>
                        <h3>Friends online: </h3>
                    </div>
                </section>
                :
                <div>
                    <h3>Loading...</h3>
                </div>
            }
        </div>
    );
};

export default ProfileStats;