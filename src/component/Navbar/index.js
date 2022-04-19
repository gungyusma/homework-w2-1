import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setToken } from "../../store/token-slice";
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { SidebarData } from "./SidebarData";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
    const token = useSelector((state) => state.accesstoken.value);
    const [isNavActive, setIsNavActive] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(setToken(null));
        localStorage.removeItem('token');
        history.push('/');
    };

    const handleNav = () => {
        setIsNavActive(!isNavActive);
    }

    const nav = (
        <>
            <div className="unactive-nav">
                <FaBars onClick={handleNav} color="white"/>
                {console.log(isNavActive)}
                <button onClick={handleLogout} className="btn-logout-unactive">
                    <BiLogOut />
                    <span>
                        Logout
                    </span>
                    
                </button>
            </div>
            <div className={isNavActive ? 'nav-menu active' : 'nav-menu'}>
                
                <ul className="navigation-ul" onClick={handleNav}>
                    <li className='navbar-toggle'>
                        <Link to="#">
                            <IoIosArrowBack color="white" />
                        </Link>
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
        </>
        
    )

    return (
        token && nav

    )
}

export default Navbar;