import React from "react";
import { Switch , Route  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreatePlaylist from '../pages/CreatePlaylist';
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../component/Navbar";
import UserProfile from "../pages/UserProfile";
import Footer from "../component/Footer";

function Routes() {
    const token = useSelector((state) => state.accesstoken.value);
    const routes = (
        <>
            <Navbar />
            <Switch>         
                <Route path="/CreatePlaylist">
                    <CreatePlaylist />
                </Route>
                <Route path="/UserProfile">
                    <UserProfile />
                </Route>
                <Route path="/">
                    <Home />
                </Route> 
            </Switch>
            <Footer />
        </>
        
    )
    

    return (
        token ? routes : <Login />
    );
}

export default Routes;