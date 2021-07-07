import {Switch, Redirect, Route} from 'react-router-dom';
import PrivateRoutes from '../../helpers/routes/PrivateRoutes';
import LandingPage from '../../components/landingPage/Landing';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

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

            <Route exact path='/Register'>
                {/* Register Page */}
                <Register />
            </Route>

            <Redirect to='/' />
        </Switch>
    );
};

export default Routes;