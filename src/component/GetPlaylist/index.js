import React from "react";
import PlaylistCard from "../PlaylistCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import './getplaylist.css';
function GetPlaylist({userid}) {

    GetPlaylist.propTypes = {
        userid : PropTypes.any
    }
    const [playlist, setPlaylist] = useState([]);
    const token = useSelector((state) => state.accesstoken.value);
    const getPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${userid}/playlists`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then(i => setPlaylist(i.items))
            .catch((error) => console.log(error))
    }

    return (
        <div className="playlist-content">
            <button className="btn-playlist" onClick={getPlaylist}>View my playlist</button>
            <div className="gridContainer" data-testid="get-my-playlist">
                {playlist.map(e =>
                    <PlaylistCard playlist={e} key={e.id} />
                )} 
            </div>
        </div>
       
    )
}

export default GetPlaylist;