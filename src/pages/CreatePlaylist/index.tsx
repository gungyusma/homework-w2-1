import React from "react";
import SearchTrack from "../../component/SearchTrack";
import { useState } from "react";
import FormPlaylist from "../../component/FormPlaylist";
import Track from "../../component/TrackCard";
import { trackdata , searchresult } from "./types";
import "./createplaylist.css";

function CreatePlaylist() {
    const [Result, setResult] = useState<trackdata[]>([])
    const [SelectedQuery, setSelectedQuery] = useState<searchresult[]>([])
    return  (
        <div className="container-createplaylist">
            <h1 className="heading2">Create Playlist</h1>
            <FormPlaylist SelectedQuery={SelectedQuery} setSelectedQuery={setSelectedQuery} className='formplaylist'/>
            <SearchTrack setResult={setResult}/>
            {console.log(Result)}
            <ul className="content">
                {Result.map(e =>
                <li key={e.id}>
                    <Track 
                    data={e} 
                    status={false} 
                    setSelectedQuery={setSelectedQuery} 
                    SelectedQuery={SelectedQuery} 
                    tracktype="card"
                    />
                </li> )} 
            </ul>   
        </div>
    )
}

export default CreatePlaylist;