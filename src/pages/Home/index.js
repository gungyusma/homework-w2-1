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
    const user = useSelector((state) => state.userdetails.value)
    const [offset, setOffset] = useState(0);
    const limit = 24;
    
    const getRecentlyPlayed = async () => {
        const {
            data: tracks
        } = await SpotifyAPI.getRecentlyPlayed(token);
        setRecentlyPlay(tracks.items);
        console.log(tracks.items);
    }

    const getTopTracks = async () => {
        const {
            data: tracks
        } = await SpotifyAPI.getTopTracks(token);
        setTopTracks(tracks.items);
    }

    const nextPage = () => {
        setOffset(offset+24)
    }

    const prevPage = () => {
        if (offset > 0) {
            setOffset(offset-24)
        }
        
    }

    useEffect(() => {
        getRecentlyPlayed();
        getTopTracks();
    }, [])

    return (
        <div className="p-4 sm:ml-64">
            
            <div className="mt-3">
                <span className="m-8 text-lg font-extrabold leading-none tracking-tight text-white md:text-2xl lg:text-3xl dark:text-white">Hi,<span className="underline underline-offset-8 decoration-8 decoration-blue-400 dark:decoration-blue-600">{user.display_name} </span></span>   
                <SearchTrack setResult={setResult} offset={offset} limit={limit}/> 
            </div>
           
             
             {Result === "" ?
             (  
             <> 
                {RecentlyPlay.length === 0 ? false :(
                    <div>
                        <h1 className="heading-one">Recently Played</h1>
                        <ul className="content ml-3">
                            {RecentlyPlay.map(e => 
                                <HomeCard data={e} key={e.id}/> 
                            )}
                        </ul>
                    </div>
                
                )}
                
                {topTracks.length === 0 ? false : (<h1 className="heading-one">Your top tracks</h1>) }
                <ul className="content ml-3">
                    {topTracks.map(e => 
                        <HomeCard data={e} key={e.id}/> 
                    )}
                </ul>
            </>   
                 
             )
             : 
             (
                <>
                <div className="flex mt-5 ml-7">
                    
                    <button onClick={prevPage} className="flex items-center justify-center px-1 h-8 text-sm font-medium text-gray-500 bg-gray-800 border border-gray-700 rounded-lg hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                    </button>

    
                    <button onClick={nextPage} className="flex items-center justify-center px-1 h-8 ml-3 text-sm font-medium text-gray-500 bg-gray-800 border border-gray-700 rounded-lg hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
                <ul className="content ml-3 mt-5">
                    {Result.map(e =>
                        <>
                        <HomeCard data={e} key={e.id} />
                        
                        </>
                    )} 
                </ul>  
             
                </>
             )
             }
             
               

        </div>
        
    )
}
export default Home;