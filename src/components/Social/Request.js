import Loading from "../utility/Loading"

const Request = ({requests}) => {

    const approve = () => {
        //approve the friend request
        
    }

    const deny = () => {
        //deny the friend request
        
    }

    let displayRequests = requests.map(request => {
        return(
            <div>
                <img src={request.profilePic} alt={request.profileName} />
                <button onClick={approve}>Accept</button>
                <button onClick={deny}>Reject</button>
            </div>
        )
    })

    return(
        <div>
            {displayRequests ? displayRequests : <Loading />}
        </div>
    );
};

export default Request;