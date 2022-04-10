import React from "react";
import { Switch , Route  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreatePlaylist from '../pages/CreatePlaylist';
import Login from "../pages/Login";

function Routes() {
    const token = useSelector((state) => state.accesstoken.value);
    const routes = (
        <Switch>
            <Route path="/" exact>
                <CreatePlaylist />
            </Route> 
        </Switch>
    )
    

    return (
        token ? routes : <Login />
    );
}

export default Routes;