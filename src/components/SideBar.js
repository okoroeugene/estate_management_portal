import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="pcoded-navbar">
                <div className="pcoded-inner-navbar main-menu">
                    <div className>
                        <div className="main-menu-header">
                            <img className="img-menu-user img-radius" src="src/assets/images/avatar-4.jpg" alt="User-Profile-Image" />
                            <div className="user-details">
                                <p id="more-details">John Doe<i className="feather icon-chevron-down m-l-10" /></p>
                            </div>
                        </div>
                        <div className="main-menu-content">
                            <ul>
                                <li className="more-details">
                                    <a href="user-profile.html">
                                        <i className="feather icon-user" />View profile
                                        </a>
                                    <a href="#!">
                                        <i className="feather icon-settings" />settings
                                        </a>
                                    <a href="auth-normal-sign-in.html">
                                        <i className="feather icon-log-out" />Logout
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pcoded-navigation-label">Basic</div>
                    <ul className="pcoded-item pcoded-left-item">
                        <li className>
                            <a href="navbar-light.html" className="waves-effect waves-dark">
                                <span className="pcoded-micon">
                                    <i className="feather icon-menu" />
                                </span>
                                <span className="pcoded-mtext">Dashboard</span>
                            </a>
                        </li>
                        <li className="pcoded-hasmenu">
                            <a href="javascript:void(0)" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="feather icon-home" /></span>
                                <span className="pcoded-mtext">User Management</span>
                            </a>
                            <ul className="pcoded-submenu">
                                <li className>
                                    <a href="index.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="pcoded-navigation-label">Advanced</div>
                    <ul className="pcoded-item pcoded-left-item">
                        <li className="pcoded-hasmenu">
                            <a href="javascript:void(0)" className="waves-effect waves-dark">
                                <span className="pcoded-micon"><i className="feather icon-home" /></span>
                                <span className="pcoded-mtext">Estate Management</span>
                            </a>
                            <ul className="pcoded-submenu">
                                <li className>
                                    <a href="index.html" className="waves-effect waves-dark">
                                        <span className="pcoded-mtext">List</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SideBar;
