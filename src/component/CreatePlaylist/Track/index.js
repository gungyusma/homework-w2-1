import React from "react";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Track.css';
import PropTypes from 'prop-types';
const Track = ({SelectedQuery, setSelectedQuery, data, status}) => {

    Track.propTypes = {
        SelectedQuery: PropTypes.any,
        data: PropTypes.any,
        setSelectedQuery: PropTypes.any,
        status: PropTypes.any
    }
    const [Selected, setSelected] = useState(status)
    const token = useSelector((state) => state.accesstoken.value);

    const handleSelect = () => {
        setSelected(!Selected)
        if (Selected) {
            let hardCopy = [...SelectedQuery];
            console.log()
            hardCopy = hardCopy.filter((item) => item.uri !== data.uri);
            setSelectedQuery(hardCopy);
        } else {
            var hash = data.uri.split(":")[2];
            return fetch(`https://api.spotify.com/v1/tracks/${hash}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then((lists) => {
                setSelectedQuery([...SelectedQuery, lists])
            })
            .catch((error) => console.log(error))
            }
    }

    return ( 
        <div className="Tracks">  
                <img src={data.album.images[1].url} alt="cover"/>
                <h3>{data.name}</h3>
                <p>{data.album.artists[0].name}</p>
                <button className="btn-select" onClick={handleSelect}>{Selected ? 'Unselect' : 'Select'}</button>        
        </div>       
    )
}

export default Track;