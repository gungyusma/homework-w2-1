import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/token-slice";
import { useEffect } from 'react';


import './Login.css';
function Login() {

  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=f43e3cdcf7214718ad9213d01ec771a4&response_type=token&redirect_uri=http://localhost:3000 https://homework-w2-1.vercel.app/&scope=playlist-modify-private user-read-recently-played user-top-read`
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