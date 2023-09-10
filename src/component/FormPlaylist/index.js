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
        <><div className="flex mt-4 items-center justify-center">

            <div className='w-1/2 mr-8'>
               
                <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Title</label>
                    <input 
                     type="text"
                     name="title"
                     value={fields.title}
                     onChange={handleFields}
                     placeholder="Your playlist's title"
                     minLength="10"
                     data-testid="input-playlist"
                     required
                     className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <textarea 
                    type="text"
                    name="description"
                    value={fields.description}
                    onChange={handleFields}
                    placeholder="Description"
                    data-testid="input-playlist"
                    required
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>


            <div className="w-1/2">
                
                <div className="relative overflow-x-hidden overflow-y-scroll h-64 shadow-md sm:rounded-lg">
                <span className='text-white'>Selected songs</span>
                    <table className="w-full pl-4 text-sm text-left text-gray-500 dark:text-gray-400"> 
                        <tbody>
                            {(SelectedQuery.length === 0 ? <p className='m-4'>No songs selected</p> : (
                                SelectedQuery.map(e => <Track
                                    data={e}
                                    status={true}
                                    setSelectedQuery={setSelectedQuery}
                                    SelectedQuery={SelectedQuery}
                                    key={e.id}
                                    tracktype="list" />)
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div><div className='formplaylist'>
                
                <PopupSuccess
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Success"
                ></PopupSuccess>
            </div></> 
    )
    
}

export default FormPlaylist;