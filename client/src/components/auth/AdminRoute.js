import React from 'react';
import { Redirect, Route } from "react-router-dom";


export const AdminRoute = ({ component: Component, admin, ...rest }) => {
   
    return(
    <Route
    {...rest}
    render={props =>
    localStorage.getItem("auth-token") ? (
        <Component {...props} />
    ) : (
        <Redirect 
        to={{
            pathname: "/login",
            state: {from: props.location}
        }}
        />
    )
    }
    />
    
);
}