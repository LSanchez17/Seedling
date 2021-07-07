//Will be fleshed out with redux later to handle login tokens

import { Redirect, Route } from "react-router";

const PrivateRoutes = ({exact, path, children}) => {
    const TOKEN = false;

    if(!TOKEN){
        return <Redirect to='/' />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
};

export default PrivateRoutes;