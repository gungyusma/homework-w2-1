import { useDispatch } from "react-redux";
import { setToken } from "./token-slice";
import { useEffect } from 'react';
import './App.css';

function Login() {
  //const token = useSelector((state) => state.accesstoken.value);
  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=e2d2b2820b4140c2b5e5628c3756709c&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`
  } 

  useEffect(() => {
    dispatch(setToken(window.location.hash.split("&")[0].split("=")[1]));
  })
    
  return (
    <div className="loginpage">
        <button onClick={handleToken}>Login with Spotify</button>
    </div>
  );
  
 
}

export default Login;