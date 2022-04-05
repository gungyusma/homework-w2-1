import { useState } from 'react';
import Track from './Track';
import './Track.css';
import Form from './Form';
import { useSelector } from 'react-redux';

function Search() {
    const [searchQuery, setsearchQuery] = useState("")
    const [Result, setResult] = useState([])
    const [SelectedQuery, setSelectedQuery] = useState([])
    const token = useSelector((state) => state.accesstoken.value);

    const handleSearch = (event) => {
        
        event.preventDefault();
        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
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
        <div>
            <h1 className="heading1">Create your own custom playlist!</h1>
            
            <Form SelectedQuery={SelectedQuery} />
            <ul className="content">
            {SelectedQuery.map(e =>
            <li>
                <Track 
                data={e}
                status={true}
                setSelectedQuery={setSelectedQuery} 
                SelectedQuery={SelectedQuery}
                />
            </li> )} 
            </ul>

            <h1 className="heading1">Choose songs you want to add</h1>
            <form onSubmit={(event) => handleSearch(event)}>

                <input
                value={searchQuery}
                placeholder="Search something"
                className="input-search"
                onChange={(event) => setsearchQuery(event.target.value)}
                ></input>
                <button className="btn-search">Search</button>
            </form>
            <ul className="content">
            {Result.map(e =>
            <li >
                <Track data={e} 
                status={false} 
                setSelectedQuery={setSelectedQuery} 
                SelectedQuery={SelectedQuery} 
                />
            </li> )} 
            </ul>

        </div>
    )
    
}

export default Search;