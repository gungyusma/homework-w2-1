import React from 'react';
import {AiFillHome, AiOutlineUser} from "react-icons/ai";
import {BiLibrary} from 'react-icons/bi';
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'CreatePlaylist',
        path: '/CreatePlaylist',
        icon: <BiLibrary />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/UserProfile',
        icon: <AiOutlineUser />,
        cName: 'nav-text'
    }
]