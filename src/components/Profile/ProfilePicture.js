import { useEffect, useState } from "react";

const ProfilePicture = () => {
    //Fetch picture from database
    const DEFAULT_IMG = 'https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png'
    const [picture, setPicture] = useState(DEFAULT_IMG)

    useEffect(()=>{
        const getPicture = async () => {
            //ping server

            setPicture(DEFAULT_IMG)
        }

        getPicture();
    })
    return(
        <div>
            <img src={picture}></img>
        </div>
    );
};

export default ProfilePicture;