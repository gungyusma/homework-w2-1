import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setToken } from "../../store/token-slice";
import './Navbar.css';
import spotifylogo from "../../data/spotify.png";
import { SidebarData } from "./SidebarData";
import { BiLogOut } from "react-icons/bi";
import usertemplate from "../../data/user-template.jpg";
import { setUser } from "../../store/user-slice";
import { useEffect } from "react";
import SpotifyAPI from "../../api/SpotifyAPI";

function Navbar() {
    const token = useSelector((state) => state.accesstoken.value);
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.userdetails.value)

    const handleLogout = () => {
        dispatch(setToken(null));
        localStorage.removeItem('token');
        history.push('/');
    };


    const fetchUser = async () => {
        const {
            data: user
        } = await SpotifyAPI.getUser(token);
        dispatch(setUser(user));
    }
    
    useEffect(() => {
        fetchUser();
    }, [])

    const nav = (
        <>
        
            <div className="unactive-nav">
                <div className="profile-wrapper">
                <img className="profile-nav" src={usertemplate}></img>
                <p>{user.display_name}</p>
                
                </div>
            </div>
            <div className="container-sidebar">
            <div className='nav-menu active'>
                <ul className="navigation-ul">
                    <li className='navbar-toggle'>
                        <img src={spotifylogo} className="spotify-logo"></img>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                    })}
                </ul>
                
                <button onClick={handleLogout} className="btn-logout">
                    <BiLogOut />
                    <span>
                        Logout
                    </span>
                    
                </button>
            </div>
            </div>
            
        </>
        
    )

    return (
        token && nav

    )
}

export default Navbar;