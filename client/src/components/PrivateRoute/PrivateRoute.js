import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// mimic the Route component but with auth checks
// 1. API- interface behaves just like Route
// 2. Use Route by passing the props to it
// 3. If use is authenticated, then render the component. 
//      If not redirect to /login.

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={() =>{
            if(localStorage.getItem('token')) {
                return <Component />;
            } else {
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default PrivateRoute;