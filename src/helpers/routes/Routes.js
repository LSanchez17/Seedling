import {Switch, Redirect, Route} from 'react-router-dom';
import PrivateRoutes from '../../helpers/routes/PrivateRoutes';
import LandingPage from '../../components/landingPage/Landing';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import Dashboard from '../../components/dashboard/Dashboard';
import Plants from '../../components/Plants/Plants';
import Weather from '../../components/Weather/Weather';
import Social from '../../components/Social/Social';
import Profile from '../../components/Profile/Profile';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                {/* Landing Page */}
                <LandingPage />
            </Route>

            <Route exact path='/login'>
                {/* Login Page */}
                <Login />
            </Route>

            <Route exact path='/register'>
                {/* Register Page */}
                <Register />
            </Route>

            {/* 
            Remove from here, and add to private routes after testing! 
            So these routes below should be private
            */}
            <Route exact path='/dashboard'>
                <Dashboard />
            </Route>

            <Route exact path='/plants'>
                <Plants />
            </Route>

            <Route exact path='/weather'>
                <Weather />
            </Route>

            <Route exact path='/Social'>
                <Social />
            </Route>

            <Route exact path='/profile'>
                <Profile />
            </Route>

            <Redirect to='/' />
        </Switch>
    );
};

export default Routes;