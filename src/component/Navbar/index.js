import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setToken } from "../../store/token-slice";
import './Navbar.css';
// import spotifylogo from "../../data/spotify.png";
// import { SidebarData } from "./SidebarData";
// import { BiLogOut } from "react-icons/bi";
//import usertemplate from "../../data/user-template.jpg";
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
        
        <><button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 m-5 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-black-900">
                    <ul className="space-y-4 font-normal">
                        <div className="p-5 bg-gray-800 border border-gray-700 rounded-lg">
                        <li className="text-white py-2 mb-2 font-medium text-sm">ACCOUNT</li>
                            <li>                                
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=""/>
                                    <div className="font-medium text-white">
                                        <div>{user.display_name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Type: user</div>
                                    </div>
                                </div>                            
                            </li>
                        </div>
                        <div className="p-5 bg-gray-800 border border-gray-700 rounded-lg">
                            <li className="text-white py-2 mb-2 font-medium text-sm">MENU</li>
                            <li>
                                <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-white hover:text-black whitespace-nowrap">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/CreatePlaylist" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-white hover:text-black whitespace-nowrap">Create playlist</span>
                                    
                                </Link>
                            </li>
                            
                           
                        </div>
                        <div className="px-5 py-3 bg-blue-700 rounded-lg">
                            <li>
                                <button onClick={handleLogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-white hover:text-black whitespace-nowrap">Logout</span>
                                </button>
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </aside>
        </>
    )

    return (
        token && nav

    )
}

export default Navbar;