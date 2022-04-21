import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import './getplaylist.css';
import { useEffect } from "react";
import PlaylistCard from "../PlaylistCard";
import SpotifyAPI from "../../api/SpotifyAPI";

function GetPlaylist({userid}) {

    GetPlaylist.propTypes = {
        userid : PropTypes.any
    }
    const [playlist, setPlaylist] = useState([]);
    const token = useSelector((state) => state.accesstoken.value);
    const getPlaylist = async () => {
        const {
            data: tracks
        } = await SpotifyAPI.getPlaylist(token, userid);
        setPlaylist(tracks.items);
    }

    useEffect(() => {
        getPlaylist();
    }, [])

    return (
        <div className="playlist-content">
            <div className="gridContainer" data-testid="get-my-playlist">
                {console.log(playlist)}
                {playlist.map(e =>
                    <PlaylistCard playlist={e} key={e.id} />
                )} 
            </div>
        </div>
       
    )
}

export default GetPlaylist;