import Loading from "../utility/Loading";
import { useEffect, useState } from "react";

const PlantFriend = () => {
    const [friends, setFriends] = useState();


    useEffect(() => {
        const fetchFriends = async () => {

            setFriends();
        }

        fetchFriends();
    }, []);

    let displayFriends = friends.map(friend => {
        //Friend picture should be clickable, rerouting to their profile page
        return(
            <div>
                <div>
                    <img src={friend.profilePic} alt={friend.name} />
                    <h2>{friend.userName}</h2>
                </div>
                <div>
                    <RecentPlants plants={friend.recentPlants} />
                </div>
            </div>
        )
    })

    return(
        <div>
            {friends ? displayFriends : <Loading />}
        </div>
    );
};

export default PlantFriend;