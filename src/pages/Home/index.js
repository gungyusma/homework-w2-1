import React from "react";
import { useState } from "react";
import './home.css'
import SearchTrack from "../../component/CreatePlaylist/SearchTrack";
import Track from "../../component/CreatePlaylist/TrackCard";
import { useSelector } from "react-redux";

function Home() {
    const [Result, setResult] = useState("");
    //const [Recommendation, serRecommendation] = useState("");
    const token = useSelector((state) => state.accesstoken.value);
    const topAlbum = () => {
        fetch('https://api.spotify.com/v1/me/top/tracks', {
            method: 'GET', headers: {
                'Authorization': 'Bearer ' + token
                }
            }).then(res => res.json())
            .then(i => {
                {console.log(i.items)}
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
             <SearchTrack setResult={setResult}/>
             {Result === "" ? topAlbum() : 
             (
                <ul className="content">
                {Result.map(e =>
                <li key={e.id}>
                    <Track 
                    data={e} 
                    status={false} 
                    tracktype="card"
                    />
                </li> )} 
            </ul>   
             )
             }
        </div>
        
    )
}
export default Home;