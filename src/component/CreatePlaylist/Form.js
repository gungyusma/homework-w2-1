import { useState , useEffect } from 'react';
import './Track.css';

function Form(props) {
    //const [playlistItem, setPlaylistItem] = useState([]);
    const [userId, setUserId] = useState('');
    const [fields, setFields] = useState({
        title: '',
        description: ''
    });
    const [playlistId, setPlaylistId] = useState('')

    
    const fetchUser = () => {
        fetch('https://api.spotify.com/v1/me', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token
                }
            }).then(res => res.json())
            .then(i => setUserId(i.id))
            .catch((error) => console.log(error))
    }


    const createPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + props.token
            },
            body: JSON.stringify({
                name: fields.title,
                description: fields.description,
                public: false
            })
            }
        ).then((res) => res.json())
        .then(item => setPlaylistId(item.id))
        .catch((error) => console.log(error))
    }

    const showPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + props.token
            }}).then((res) => res.json())
        .then(item => console.log(item))
        .catch((error) => console.log(error))
    }

    const handleFields = (e) => {
        const { name, value } = e.target
        setFields({...fields, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPlaylist();
        AddItemToPlaylist();
        showPlaylist();
        alert("Playlist added!")
    }

    useEffect(() => {
        fetchUser();
    })

    const AddItemToPlaylist = () => {
        fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + props.token
            },
            data: props.SelectedQuery
            }
        ).then((res) => res.json())
        .then(i => console.log(playlistId))
        .catch((error) => console.log(error))
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                value={fields.title}
                onChange={handleFields}
                placeholder="Your playlist's title"
                className="input-search"
                ></input>

                <input
                type="text"
                name="description"
                value={fields.description}
                onChange={handleFields}
                placeholder="Description"
                className="input-search"
                ></input>
                <button type="Submit" className="btn-search">Submit</button>
            </form>
        </div> 
    )
    
}

export default Form;