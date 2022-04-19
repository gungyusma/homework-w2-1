import React from "react";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Track.css';
import PropTypes from 'prop-types';
const Track = ({SelectedQuery, setSelectedQuery, data, status, tracktype}) => {

    Track.propTypes = {
        SelectedQuery: PropTypes.any,
        data: PropTypes.any,
        setSelectedQuery: PropTypes.any,
        status: PropTypes.any,
        tracktype: PropTypes.any
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

    const Card = ( 
        <div className="Tracks">  
            <img src={data.album.images[1].url} alt="cover"/>
            <h3>{data.name}</h3>
            <p>{data.album.artists[0].name}</p>
            <button className="btn-select" onClick={handleSelect}>{Selected ? 'Unselect' : 'Select'}</button>        
        </div>       
    )

    const List = (
        <tr className="List">
            <td><img src={data.album.images[2].url} alt="cover"/></td>
            <td><b>{data.name}</b><br/>{data.album.artists[0].name}</td>
            <td>{data.album.name}</td>
            <td><button className="btn-list" onClick={handleSelect}>{Selected ? 'Unselect' : 'Select'}</button></td>
        </tr>  
    )

    return (
        <div data-testid="show-track">
           { tracktype === "list" ? List  : Card }
        </div>
        
    )
}

export default Track;