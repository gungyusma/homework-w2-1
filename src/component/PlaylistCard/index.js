import React from "react";
import PropTypes from 'prop-types';
import './playlistcard.css';
function PlaylistCard({playlist}) {

    PlaylistCard.propTypes = {
        playlist : PropTypes.any

    }
    return (
        <div className="gridItem">
            <img src={playlist.images[1].url}></img>
            <h1>{playlist.name}</h1>
            <p>{playlist.type}</p>
            <a href={playlist.external_urls.spotify} target="_blank" rel="noreferrer">View</a>
        </div>
    )

}

export default PlaylistCard;