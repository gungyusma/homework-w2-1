import React from "react";
import PropTypes from 'prop-types';
import './searchplaylist.css';
import usertemplate from "../../data/user-template.jpg";
import { useSelector } from "react-redux";
function ShowProfile() {
    const user = useSelector((state) => state.userdetails.value)
    ShowProfile.propTypes = {
        user : PropTypes.any,
    }
    
    return (
        <>
        <div className="hero-item">    
            { user.images.length === 0 ?  <img className="profile-pic" src={usertemplate}></img> : <img className="profile-pic" src={user.images[0].url}></img>}
            
            
            <div className="user-greet">
                <h1>{user.display_name}</h1> 
                <p>followers : {user.followers.total}  •  account type : {user.type}</p>
                <a
                href={user.href}
                target="_blank"
                rel="noreferrer"
                >
                See more
                </a>
            </div>
            
        </div>
            
        </>

    )
} 

export default ShowProfile;