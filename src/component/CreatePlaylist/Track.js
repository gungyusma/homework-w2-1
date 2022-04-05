import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Track.css';

const Track = (props) => {
    //const [buttontext, setButtonText] = useState(status ? "Select" : "Unselect")
    const [Selected, setSelected] = useState(props.status)
    const token = useSelector((state) => state.accesstoken.value);

    const handleSelect = () => {
        setSelected(!Selected)
        if (Selected) {
            let hardCopy = [...props.SelectedQuery];
            console.log()
            hardCopy = hardCopy.filter((item) => item.uri !== props.data.uri);
            props.setSelectedQuery(hardCopy);
        } else {
            var hash = props.data.uri.split(":")[2];
            //console.log(hash)
            return fetch(`https://api.spotify.com/v1/tracks/${hash}`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then((lists) => {
                props.setSelectedQuery([...props.SelectedQuery, lists])
                //console.log(props.status)
            })
            .catch((error) => console.log(error))
            }
    }

    return ( 
        <div className="Tracks">  
                <img src={props.data.album.images[1].url} alt="cover"/>
                <h3>{props.data.name}</h3>
                <p>{props.data.album.artists[0].name}</p>
                {/* {console.log(props.SelectedQuery)} */}
                <button className="btn-select" onClick={handleSelect}>{Selected ? 'Unselect' : 'Select'}</button>        
        </div>       
    )
}

export default Track;