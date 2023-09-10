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
        <div className="container-createplaylist p-4 sm:ml-64">
           <div className="mb-5">
           <span className="m-8 text-lg font-extrabold leading-none tracking-tight text-white md:text-2xl lg:text-3xl dark:text-white">Create playlist</span>   
           </div>
            <FormPlaylist SelectedQuery={SelectedQuery} setSelectedQuery={setSelectedQuery} className='formplaylist'/>

            <div className="p-2 ml-2 mb-2 rounded-lg text-md text-white" >
                <span className="font-medium">Search and select</span> songs to this playlist 🎵 
            </div>

            <SearchTrack setResult={setResult} offset={0} limit={24}/>
              
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