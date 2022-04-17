import React from "react";
import Search from "../../component/CreatePlaylist/Search";
import { useState } from "react";
import Form from "../../component/CreatePlaylist/Form";
import Track from "../../component/CreatePlaylist/Track";
import { trackdata , searchresult } from "./types";
function CreatePlaylist() {
    const [Result, setResult] = useState<trackdata[]>([])
    const [SelectedQuery, setSelectedQuery] = useState<searchresult[]>([])
    return  (
        <div>
            <h1 className="heading2">CREATE PLAYLIST</h1>
            <Form SelectedQuery={SelectedQuery} setSelectedQuery={setSelectedQuery} className='formplaylist'/>
            <Search setResult={setResult}/>
            <ul className="content">
                {Result.map(e =>
                <li key={e.id}>
                    <Track 
                    data={e} 
                    status={false} 
                    setSelectedQuery={setSelectedQuery} 
                    SelectedQuery={SelectedQuery} 
                    />
                </li> )} 
            </ul>   
        </div>
    )
}

export default CreatePlaylist;