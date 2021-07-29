import { useEffect, useState } from "react"
import ProfilePicture from "../Profile/ProfilePicture";
import ProfileStats from "../Profile/ProfileStats";
import PlantBubble from "./PlantBubble";


const NonUserProfiles = () => {
    const [nonUserPlants, setNonUserPlants] = useState();
    const [nonUserInfo, setNonUserInfo] = useState();
    const [friendRequest, setFriendRequest] = useState();

    useEffect(() => {
        const fetchData = async () => {
            //promise.all? maybe

            setNonUserInfo();
            setNonUserPlants();
        }

        const isMyFriend = async () => {
            let answer;

            setFriendRequest(answer);
        }

        fetchData();
        isMyFriend();
        
    }, []);


    const sendFriendRequest = () =>{
        //api call etc

        setFriendRequest(!friendRequest);
        isMyFriend(friendRequest => !friendRequest);
    }

    return (
        <div>
            <div>
                <ProfilePicture />
                <ProfileStats extraInfo={false} />
                {friendRequest ?  
                 <button onClick={sendFriendRequest}>Send Friend Request</button>
                 :
                 <h2>Friend Request Sent</h2>
                }
            </div>
            <div>
                <PlantBubble plants={nonUserPlants} />
            </div>
        </div>
    )
}