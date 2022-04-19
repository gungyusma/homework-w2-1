import React from "react";
import SearchTrack from "../../component/CreatePlaylist/SearchTrack";
import { useState } from "react";
import FormPlaylist from "../../component/CreatePlaylist/FormPlaylist";
import Track from "../../component/CreatePlaylist/TrackCard";
import { trackdata , searchresult } from "./types";

function CreatePlaylist() {
    const [Result, setResult] = useState<trackdata[]>([])
    const [SelectedQuery, setSelectedQuery] = useState<searchresult[]>([])
    return  (
        <div>
            <h1 className="heading2">CREATE PLAYLIST</h1>
            <FormPlaylist SelectedQuery={SelectedQuery} setSelectedQuery={setSelectedQuery} className='formplaylist'/>
            <SearchTrack setResult={setResult}/>
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