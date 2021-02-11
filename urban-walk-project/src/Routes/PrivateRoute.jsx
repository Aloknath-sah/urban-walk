import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { AppContext } from '../Context/AppContextProvider';

const PrivateRoute = ({Component, ...rest}) => {
    return (
        <AppContext.Consumer>
        {
            (({isAuth})=> {
                return isAuth?<Route {...rest} render={(props)=> <Component {...props} />} />:<Redirect to="/login" />
            })
        }
        </AppContext.Consumer>
    );
}

export default PrivateRoute;
