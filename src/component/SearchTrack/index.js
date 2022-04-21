import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import { useSelector } from 'react-redux';
//import SpotifyAPI from '../../../api/SpotifyAPI';
function SearchTrack({ setResult }) {

    SearchTrack.propTypes = {
        setResult: PropTypes.func
    }

    const [searchQuery, setsearchQuery] = useState([]);
    const token = useSelector((state) => state.accesstoken.value);

    // const handleSearch = async () => {
    //     const {
    //         data: tracks
    //     } = await SpotifyAPI.getSearchTrack(token, searchQuery);
    //     setResult(tracks.items);
    // }

    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=24`, {
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
        <div className='search-bar'>
            <h1 className="heading-one">Let`s find something</h1>
            <form onSubmit={(event) => handleSearch(event)}>
                        <input
                        data-testid="search-bar"
                        className='input-search'
                        id="outlined" 
                        placeholder="Search something" 
                        onChange={(event) => setsearchQuery(event.target.value)}
                        />
            </form>            
        </div>
    )
    
}

export default SearchTrack;