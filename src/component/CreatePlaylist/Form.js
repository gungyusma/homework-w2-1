import React from 'react';
import { useState , useEffect } from 'react';
import './Track.css';
import { useSelector } from 'react-redux';
import List from './List';
import PropTypes from 'prop-types';
function Form({SelectedQuery, setSelectedQuery}) {
    
    Form.propTypes = {
        SelectedQuery : PropTypes.any,
        setSelectedQuery : PropTypes.any,
    }

    const token = useSelector((state) => state.accesstoken.value);
    const [userId, setUserId] = useState(null);
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
                'uris': SelectedQuery.map((track) => track.uri),
            }),
            }
            ).then((res) => res.json())
            .then(console.log(SelectedQuery.map((track) => track.uri)))
            .catch((error) => console.log(error))

            console.log(userId);
        })
        .catch((error) => console.log(error))
    }

    // const showPlaylist = () => {
    //     fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }}).then((res) => res.json())
    //         .then(item => console.log(item))
    //         .catch((error) => console.log(error))
    // }

    useEffect(() => {
        fetchUser();
    })

    const handleFields = (e) => {
        const { name, value } = e.target
        setFields({...fields, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser();
        createPlaylist();
        alert("Playlist added!")
    }

   
    return (
        <div className='formplaylist'>
            <form>
                <input
                type="text"
                name="title"
                value={fields.title}
                onChange={handleFields}
                placeholder="Your playlist's title"
                className="input-play"
                minLength="10"
                required
                ></input><br></br>

                <input
                type="text"
                name="description"  
                value={fields.description}
                onChange={handleFields}
                placeholder="Description"
                className="input-play"
                required
                ></input><br></br>
                <div className='playlistwrap'>
                    <table>
                        <tbody>
                            {SelectedQuery.map(e =>
                                <List 
                                data={e}
                                status={true}
                                setSelectedQuery={setSelectedQuery} 
                                SelectedQuery={SelectedQuery}
                                key={e.id}
                                />)} 
                        </tbody>
                    </table>
                </div>
                <button type="Submit" className="btn-search" onClick={handleSubmit}>Create</button>
            </form>
        </div> 
    )
    
}

export default Form;