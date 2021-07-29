import { useEffect, useState } from "react";

const FriendRequests = () => {
    const [requests, setRequests] = useState();

    useEffect(() => {
        const fetchFriendRequests = async () => {

            setRequests();
        }

        fetchFriendRequests();
    }, []);

    return(
        <div>
            <Request requests={requests} />
        </div>
    );
};

export default FriendRequests;