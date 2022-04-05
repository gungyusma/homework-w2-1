import { useState } from 'react';
import './Track.css';
import { useSelector } from 'react-redux';

function Form(props) {
    const token = useSelector((state) => state.accesstoken.value);
    const [userId, setUserId] = useState('');
    const [fields, setFields] = useState({
        title: '',
        description: ''
    });
    
    const fetchUser = () => {
        fetch('https://api.spotify.com/v1/me', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then(i => setUserId(i.id))
            .catch((error) => console.log(error))
    }


    const createPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: fields.title,
                description: fields.description,
                public: false
            })
            }
        ).then((res) => res.json())
        .then((item) => {
            fetch(`https://api.spotify.com/v1/playlists/${item.id}/tracks`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                'uris': props.SelectedQuery.map((track) => track.uri),
            }),
            }
            ).then((res) => res.json())
            .then(i => console.log(props.SelectedQuery.map((track) => track.uri)))
            .catch((error) => console.log(error))

            showPlaylist();
        })
        .catch((error) => console.log(error))
    }

    const showPlaylist = (id) => {
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
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
        fetchUser();
        createPlaylist();
        //AddItemToPlaylist();
        //showPlaylist();
        alert("Playlist added!")
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
                className="input-play"
                minLength="10"
                ></input><br></br>

                <input
                type="text"
                name="description"
                value={fields.description}
                onChange={handleFields}
                placeholder="Description"
                className="input-play"
                ></input><br></br>
                
                <button type="Submit" className="btn-search">Create</button>
            </form>
        </div> 
    )
    
}

export default Form;