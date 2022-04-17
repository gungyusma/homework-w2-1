import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import { useSelector } from 'react-redux';


function Search({ setResult }) {

    Search.propTypes = {
        setResult: PropTypes
    }
    const [searchQuery, setsearchQuery] = useState([]);
    const token = useSelector((state) => state.accesstoken.value);
    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
         })
        .then((response) => response.json())
        .then((lists) =>
            setResult(lists.tracks.items)
         ).catch((error) => console.log(error))
    }

    return (
        <div className='CreatePlaylist'>
            <h1 className="heading1">Let`s find something for your playlist</h1>
            <form onSubmit={(event) => handleSearch(event)}>
                        <input
                        className='input-search'
                        id="outlined" 
                        placeholder="Search something" 
                        onChange={(event) => setsearchQuery(event.target.value)}
                        />
            </form>            
        </div>
    )
    
}

export default Search;