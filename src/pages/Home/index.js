import React from "react";
import { useState } from "react";
import './home.css'
import SearchTrack from "../../component/SearchTrack";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../../component/HomeCard";
import SpotifyAPI from "../../api/SpotifyAPI";

function Home() {
    const [Result, setResult] = useState("");
    const [RecentlyPlay, setRecentlyPlay] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const token = useSelector((state) => state.accesstoken.value);
    
    const getRecentlyPlayed = async () => {
        const {
            data: tracks
        } = await SpotifyAPI.getRecentlyPlayed(token);
        setRecentlyPlay(tracks.items);
    }

    const getTopTracks = async () => {
        const {
            data: tracks
        } = await SpotifyAPI.getTopTracks(token);
        setTopTracks(tracks.items);
    }

    useEffect(() => {
        getRecentlyPlayed();
        getTopTracks();
    }, [])

    return (
        <div className="container-home">
             <SearchTrack setResult={setResult}/>
             {console.log(RecentlyPlay)}
             <h1 className="heading-one">Recently Played</h1>
             {Result === "" ?
             (  
             <> 
                <ul className="content">
                    {RecentlyPlay.map(e => 
                        <HomeCard data={e.track} key={e.track.id}/> 
                    )}
                </ul>
                <h1 className="heading-one">Your Top Tracks</h1>
                <ul className="content">
                    {topTracks.map(e => 
                        <HomeCard data={e} key={e.id}/> 
                    )}
                </ul>
            </>   
                 
             )
             : 
             (
                <ul className="content">
                    {Result.map(e =>
                        <HomeCard data={e} key={e.id}/>
                    )} 
                </ul>   
             )
             }
        </div>
        
    )
}
export default Home;