import React from "react";
import PropTypes from 'prop-types';
import "./HomeCard.css";

function HomeCard({data}) {
    HomeCard.propTypes = {
        data : PropTypes.any,
    }
    return (
        
        <li className="card-wrapper">
            <a href={data.external_urls.spotify} className="Tracks-default" target="_blank" rel="noreferrer">  
            <img src={data.album.images[1].url} alt="cover"/>
            <h3>
            {data.name.length > 11 ?
                `${data.name.substring(0, 11)}...` : data.name
            }
            </h3>
            <p>
            {data.album.artists[0].name.length > 11 ?
                `${data.album.artists[0].name.substring(0, 11)}...` : data.album.artists[0].name
            }
            </p>     
            </a>
        </li>
        
    )
}

export default HomeCard;