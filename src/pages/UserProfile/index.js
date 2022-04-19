import React from "react";
import ShowProfile from "../../component/ShowProfile";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import GetPlaylist from "../../component/GetPlaylist";

function UserProfile() {
    const [user, setUser] = useState([])
    const token = useSelector((state) => state.accesstoken.value);
    const [profilePic, setProfilePic] = useState("");
    const [urlProfile, setUrlProfile] = useState("");
    

    const fetchUser = () => {
        fetch('https://api.spotify.com/v1/me', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then(i => {setUser(i)
                setProfilePic(i.images[0].url)
                setUrlProfile(i.external_urls.spotify)
                {console.log(i)}
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchUser();
        
    }, [])

    return(
        <>
        <div className="container">
            <ShowProfile user={user} profilepic={profilePic} urlprofile={urlProfile}/>
            <GetPlaylist userid={user.id}/>
        </div>
        </>
    )
}

export default UserProfile;