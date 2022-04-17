import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {FaHeart} from "react-icons/fa";
import {MdLibraryAdd} from 'react-icons/md';
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Create Playlist',
        path: '/CreatePlaylist',
        icon: <MdLibraryAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/Favorites',
        icon: <FaHeart />,
        cName: 'nav-text'
    }
]