import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// mimic the Route component but with auth checks
const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        // 1. API- interface behaves just like Route.
        // 2. Use Route by passing the props to it
        <Route {...props} render={() =>{

            // 3. If use is authenticated, then render the component. 
            if(localStorage.getItem('token')) {
                return <Component />;
            } 
            //      If not redirect to /login.
            else {
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default PrivateRoute;