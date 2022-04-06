import { Switch, Route  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreatePlaylist from '../pages/CreatePlaylist';
import Login from '../Login';
//import { Redirect } from 'react-router-dom';
//import PrivateRoute from './PrivateRoutes';


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