'use strict';

import React, { Component } from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import constants from '../src/constants';
import history from './config/history';
import MainLayout from './components/MainLayout';
import EmptyLayout from './components/EmptyLayout';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

// function isAuthenticated() {
//     var token = window.sessionStorage.getItem(constants.TOKEN)
//     if (!token) return false;
//     return true;
// }

const AppRoute = ({ Layout, Component, path }, ...rest) => (
    <Route {...rest} path={path} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
)

const ProtectedRoute = ({ Layout, Component, path }, ...rest) => (
    <Route {...rest} path={path} render={props => (
        isAuthenticated() === true
            ? <Layout>
                <Component {...props} />
            </Layout>
            : <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
            }} />
    )} />
)

const App = () => (
    <Router history={history}>
        <Switch>
            <AppRoute exact path={"/login"} Layout={EmptyLayout} Component={Login} />
            <AppRoute exact path={"/register"} Layout={EmptyLayout} Component={Register} />
            <AppRoute exact path={"/"} Layout={MainLayout} Component={Dashboard} />
        </Switch>
    </Router>
)

export default App;