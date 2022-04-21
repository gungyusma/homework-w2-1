import React from 'react';
import { useState } from 'react';
import './Form.css';
import { useSelector } from 'react-redux';
import Track from '../TrackCard';
import PropTypes from 'prop-types';
import PopupSuccess from './PopupSuccess';
function FormPlaylist({SelectedQuery, setSelectedQuery}) {
    
    FormPlaylist.propTypes = {
        SelectedQuery : PropTypes.any,
        setSelectedQuery : PropTypes.any,
    }
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
      setVisibility(false);
    };
    const user = useSelector((state) => state.userdetails.value)
    const token = useSelector((state) => state.accesstoken.value);

    const [fields, setFields] = useState({
        title: '',
        description: ''
    });

    const createPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
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
            .then(() => {
                setFields({title: '', description: ''});
                setSelectedQuery([]);
                setVisibility(true);
            })
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    }

    const handleFields = (e) => {
        const { name, value } = e.target
        setFields({...fields, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPlaylist();
    }

    return (
        <div className='formplaylist'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                value={fields.title}
                onChange={handleFields}
                placeholder="Your playlist's title"
                className="input-play"
                minLength="10"
                data-testid="input-playlist"
                required
                ></input><br></br>

                <input
                type="text"
                name="description"  
                value={fields.description}
                onChange={handleFields}
                placeholder="Description"
                data-testid="input-playlist"
                className="input-play"
                required
                ></input><br></br>
                <div className='playlistwrap'>
                    <table>
                        <tbody>
                            {SelectedQuery.map(e =>
                                <Track 
                                data={e}
                                status={true}
                                setSelectedQuery={setSelectedQuery} 
                                SelectedQuery={SelectedQuery}
                                key={e.id}
                                tracktype="list"
                                />)} 
                        </tbody>
                    </table>
                </div>
                <button type="Submit" className="btn-create">Create</button>
            </form>
            <PopupSuccess
            onClose={popupCloseHandler}
            show={visibility}
            title="Success"
            ></PopupSuccess>
        </div> 
    )
    
}

export default FormPlaylist;