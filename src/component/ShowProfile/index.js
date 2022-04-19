import React from "react";
import PropTypes from 'prop-types';
import './searchplaylist.css';

function ShowProfile({user, profilepic, urlprofile}) {

    ShowProfile.propTypes = {
        user : PropTypes.any,
        profilepic: PropTypes.any,
        urlprofile: PropTypes.any
    }
    
    return (
        <>
        <div className="hero-item">    
            
            <img className="profile-pic" src={profilepic}></img>
            
            <div className="user-greet">
                <p>PROFILE</p>
                <h1>{user.display_name}</h1> 
                <a
                href={urlprofile}
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