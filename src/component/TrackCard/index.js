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
    const cardUnseleted = "btn-select py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    const cardSeleted = "btn-select py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-100 text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

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
            <button className={Selected ? cardSeleted : cardUnseleted} onClick={handleSelect}>{Selected ? 'Unselect' : 'Select'}</button>        
        </div>       
    )

    const List = (
        <tr className="List">
            <td><img src={data.album.images[2].url} alt="cover"/></td>
            <td><b>{data.name}</b><br/>{data.album.artists[0].name}</td>
            <td><button type="button" onClick={handleSelect} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{Selected ? 'Unselect' : 'Select'}</button></td>
        </tr>  
    )

    return (
        <div data-testid="show-track">
           { tracktype === "list" ? List  : Card }
        </div>
        
    )
}

export default Track;