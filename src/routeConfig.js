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
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import ResidentForm from './components/ResidentForm';
import VisitorForm from './components/VisitorForm';

function isAuthenticated() {
    // var token = window.sessionStorage.getItem(constants.TOKEN)
    // if (!token) return false;
    return true;
}

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
            <ProtectedRoute exact path={"/dashboard"} Layout={MainLayout} Component={Dashboard} />
            <ProtectedRoute exact path={"/users"} Layout={MainLayout} Component={ListUsers} />
            <ProtectedRoute exact path={"/create-user"} Layout={MainLayout} Component={CreateUser} />
            <ProtectedRoute exact path={"/resident-profile"} Layout={MainLayout} Component={ResidentForm} />
            <ProtectedRoute exact path={"/visitor-form"} Layout={MainLayout} Component={VisitorForm} />
            <Redirect from="/" to="dashboard" />
        </Switch>
    </Router>
)

export default App;