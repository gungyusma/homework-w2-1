import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './searchplaylist.css';
function SearchPlaylist() {
    const [userId, setUserId] = useState([])
    const token = useSelector((state) => state.accesstoken.value);

    const fetchUser = () => {
        fetch('https://api.spotify.com/v1/me', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then(i => setUserId(i))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
        <div className="hero-item">
        <h1>Hello, {userId.display_name}!</h1> 
        </div>
            
        </>

    )
} 

export default SearchPlaylist;