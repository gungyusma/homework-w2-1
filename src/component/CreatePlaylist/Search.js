import { useState } from 'react';
import Track from './Track';
import './Track.css';
import Form from './Form';
function Search(props) {
    const [searchQuery, setsearchQuery] = useState("")
    const [Result, setResult] = useState([])
    //const [SelectedItems, setSelectedItems] = useState([])
    const [SelectedQuery, setSelectedQuery] = useState([])

    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token
            }
         })
        .then((response) => response.json())
        .then((lists) =>
            setResult(lists.tracks.items)
         ).catch((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={(event) => handleSearch(event)}>
                <input
                value={searchQuery}
                placeholder="Search something"
                className="input-search"
                onChange={(event) => setsearchQuery(event.target.value)}
                ></input>
                <button className="btn-search">Search</button>
            </form>

            <h1 className="heading1">Your playlist</h1>

            <Form SelectedQuery={SelectedQuery} token={props.token}/>
            <ul className="content">
            {SelectedQuery.map(e =>
            <li >
                <Track 
                data={e}
                status={true}
                setSelectedQuery={setSelectedQuery} 
                SelectedQuery={SelectedQuery} 
                token={props.token}/>
            </li> )} 
            </ul>

            <h1 className="heading1">Current search</h1>
            <ul className="content">
            {Result.map(e =>
            <li >
                <Track data={e} 
                status={false} 
                setSelectedQuery={setSelectedQuery} 
                SelectedQuery={SelectedQuery}
                token={props.token}/>
            </li> )} 
            </ul>

        </div>
    )
    
}

export default Search;