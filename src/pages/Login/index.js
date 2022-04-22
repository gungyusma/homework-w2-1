import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/token-slice";
import { useEffect } from 'react';


import './Login.css';
function Login() {

  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_API_KEY}&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private user-read-recently-played user-top-read`
  } 

  useEffect(() => {
    dispatch(setToken(window.location.hash.split("&")[0].split("=")[1]));
  })
    
  return (
    <div className="loginpage">
        <h1>Music for every mood.</h1>
        <button onClick={handleToken}>Login with Spotify</button>
    </div>
  );
  
 
}

export default Login;