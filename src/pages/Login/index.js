import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/token-slice";
import { useEffect } from 'react';


import './Login.css';
function Login() {

  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_API_KEY}&response_type=token&redirect_uri=https://homework-w2-1.vercel.app/&scope=playlist-modify-private user-read-recently-played user-top-read`
  } 

  useEffect(() => {
    dispatch(setToken(window.location.hash.split("&")[0].split("=")[1]));
  })
    
  return (

    
<section className="bg-gradient-to-r from-black via-slate-900 to-slate-700 h-screen">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <a href="https://developer.spotify.com/" className="inline-flex justify-between items-center py-2 px-0 pr-4 mb-11 text-sm text-blue-700 bg-gray-800 border border-gray-700 rounded-lg dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-lg text-white px-4 py-1.5">Info</span> <span className="text-sm font-medium">This app was made with Spotify for Developers API</span> 
            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>
        <h1 className="fade-in-out mb-4 text-6xl font-extrabold tracking-tight leading-none text-white md:text-7xl lg:text-8xl dark:text-white">Music for everyone.</h1>
        <p className="fade-in-out mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">Millions of songs, unlock the potential of human creativity.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <button type="button" onClick={handleToken} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-11 py-5 text-center mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login with Spotify</button>
        </div>
    </div>
</section>

  );
  
 
}

export default Login;