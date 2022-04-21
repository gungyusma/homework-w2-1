import React from "react";
import { Switch , Route  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreatePlaylist from '../pages/CreatePlaylist';
import Login from "../pages/Login";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function Routes() {
    const token = useSelector((state) => state.accesstoken.value);
    const routes = (
        <>
        <div className="container-all">
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
        </div>
        <Footer />
        </>
        
    )
    

    return (
        token ? routes : <Login />
    );
}

export default Routes;