import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        localStorage.clear();
        window.location.href = '/login';
    }
    render() {
        return (
            <aside id="main-sidebar" className="dt-sidebar">
                <div className="dt-sidebar__container">
                    {/* Sidebar Notification */}
                    <div className="dt-sidebar__notification  d-none d-lg-block">
                        {/* Dropdown */}
                        <div className="dropdown mb-6" id="user-menu-dropdown">
                            {/* Dropdown Link */}
                            <a href="#" className="dropdown-toggle dt-avatar-wrapper text-body" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/* <img className="dt-avatar" src="https://via.placeholder.com/150x150" alt="Domnic Harris" /> */}
                                <span className="ant-avatar gx-mr-2 ant-avatar-circle sideAvatar">
                                    <span className="ant-avatar-string avatarTxt">a</span>
                                </span>
                                <span className="dt-avatar-info">
                                    <span className="dt-avatar-name">{this.props.user.current.username}</span>
                                </span> </a>
                            {/* /dropdown link */}
                            {/* Dropdown Option */}
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dt-avatar-wrapper flex-nowrap p-6 mt--5 bg-gradient-purple text-white rounded-top">
                                    <img className="dt-avatar" src="https://via.placeholder.com/150x150" alt="Domnic Harris" />
                                    <span className="dt-avatar-info">
                                        <span className="dt-avatar-name">{this.props.user.current.username}</span>
                                        <span className="f-12">Administrator</span>
                                    </span>
                                </div>
                                <a className="dropdown-item" href="javascript:void(0)"> <i className="icon icon-user-o icon-fw mr-2 mr-sm-1" />Account
          </a> <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="icon icon-setting icon-fw mr-2 mr-sm-1" />Setting </a>
                                <a onClick={() => this.logout()} className="dropdown-item" href="javascript:void(0)"> <i className="icon icon-edit icon-fw mr-2 mr-sm-1" />Logout
          </a>
                            </div>
                            {/* /dropdown option */}
                        </div>
                        {/* /dropdown */}
                        <ul className="dt-list dt-list-xl">
                            <li className="dt-list__item pl-5 pr-5">
                                <a href="javascript:void(0)" className="dt-list__link"><i className="icon icon-search-new icon-xl" /></a>
                            </li>
                            <li className="dt-list__item pl-5 pr-5">
                                <a href="javascript:void(0)" className="dt-list__link"><i className="icon icon-notification icon-xl" /></a>
                            </li>
                            <li className="dt-list__item pl-5 pr-5">
                                <a href="javascript:void(0)" className="dt-list__link"><i className="icon icon-chat-new icon-xl" /></a>
                            </li>
                        </ul>
                    </div>
                    <ul className="dt-side-nav">
                        <li className="dt-side-nav__item dt-side-nav__header">
                            <span className="dt-side-nav__text">main</span>
                        </li>
                        <li className="dt-side-nav__item">
                            <Link to={"/dashboard"} className="dt-side-nav__link">
                                <i className="icon icon-widgets icon-fw icon-xl" />
                                <span className="dt-side-nav__text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="dt-side-nav__item">
                            <a href="javascript:void(0)" className="dt-side-nav__link dt-side-nav__arrow" title="Dashboard">
                                <i className="icon icon-dashboard icon-fw icon-xl" /> <span className="dt-side-nav__text">User Management</span>
                            </a>
                            <ul className="dt-side-nav__sub-menu">
                                <span className="dt-side-nav__item">
                                    <Link to={"/users"} className="dt-side-nav__link">
                                        <i className="icon icon-crypto icon-fw icon-sm" />
                                        <span className="dt-side-nav__text">All Users</span>
                                    </Link>
                                </span>
                                <span className="dt-side-nav__item">
                                    <Link to={"/create-user"} className="dt-side-nav__link">
                                        <i className="icon icon-crypto icon-fw icon-sm" />
                                        <span className="dt-side-nav__text">Create User</span>
                                    </Link>
                                </span>
                            </ul>
                        </li>
                        <li className="dt-side-nav__item">
                            <a href="javascript:void(0)" className="dt-side-nav__link dt-side-nav__arrow" title="Dashboard">
                                <i className="icon icon-dashboard icon-fw icon-xl" /> <span className="dt-side-nav__text">Estate Management</span>
                            </a>
                            <ul className="dt-side-nav__sub-menu">
                                <span className="dt-side-nav__item">
                                    <a href="index.html" className="dt-side-nav__link" title="Crypto"> <i className="icon icon-crypto icon-fw icon-sm" />
                                        <span className="dt-side-nav__text">List</span> </a>
                                </span>
                            </ul>
                        </li>
                        <li className="dt-side-nav__item">
                            <a href="javascript:void(0)" className="dt-side-nav__link dt-side-nav__arrow" title="Dashboard">
                                <i className="icon icon-dashboard icon-fw icon-xl" /> <span className="dt-side-nav__text">Resident Management</span>
                            </a>
                            <ul className="dt-side-nav__sub-menu">
                                <span className="dt-side-nav__item">
                                    <Link to={"/resident-profile"} className="dt-side-nav__link">
                                        <i className="icon icon-crypto icon-fw icon-sm" />
                                        <span className="dt-side-nav__text">Resident Profile</span>
                                    </Link>
                                </span>
                            </ul>
                        </li>
                        <li className="dt-side-nav__item">
                            <a href="javascript:void(0)" className="dt-side-nav__link dt-side-nav__arrow" title="Dashboard">
                                <i className="icon icon-dashboard icon-fw icon-xl" /> <span className="dt-side-nav__text">Visitor Management</span>
                            </a>
                            <ul className="dt-side-nav__sub-menu">
                                <span className="dt-side-nav__item">
                                    <Link to={"/visitor-form"} className="dt-side-nav__link">
                                        <i className="icon icon-crypto icon-fw icon-sm" />
                                        <span className="dt-side-nav__text">New Visitor</span>
                                    </Link>
                                </span>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            // <nav className="pcoded-navbar">
            //     <div className="pcoded-inner-navbar main-menu">
            //         <div>
            //             <div className="main-menu-header">
            //                 <img style={{ height: 60, border: "2px solid #ccc" }} className="img-menu-user img-radius" src="src/imgs/avatar.png" alt="User-Profile-Image" />
            //                 <div className="user-details">
            //                     <p id="more-details">{this.props.user && this.props.user.current && this.props.user.current.username}<i className="feather icon-chevron-down m-l-10" /></p>
            //                 </div>
            //             </div>
            //             <div className="main-menu-content">
            //                 <ul>
            //                     <li className="more-details">
            //                         <a href="user-profile.html">
            //                             <i className="feather icon-user" />View profile
            //                             </a>
            //                         <a href="#!">
            //                             <i className="feather icon-settings" />settings
            //                             </a>
            //                         <a href="auth-normal-sign-in.html">
            //                             <i className="feather icon-log-out" />Logout
            //                             </a>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //         <div className="pcoded-navigation-label">Basic</div>
            //         <ul className="pcoded-item pcoded-left-item">
            //             <li>
            //                 <a href="navbar-light.html" className="waves-effect waves-dark">
            //                     <span className="pcoded-micon">
            //                         <i className="feather icon-menu" />
            //                     </span>
            //                     <span className="pcoded-mtext">Dashboard</span>
            //                 </a>
            //             </li>
            //             <li className="pcoded-hasmenu">
            //                 <a href="javascript:void(0)" className="waves-effect waves-dark">
            //                     <span className="pcoded-micon"><i className="feather icon-user" /></span>
            //                     <span className="pcoded-mtext">User Management</span>
            //                 </a>
            //                 <ul className="pcoded-submenu">
            //                     <li>
            //                         <Link to={"/users"} className="waves-effect waves-dark">
            //                             <span className="pcoded-mtext">All Users</span>
            //                         </Link>
            //                     </li>
            //                     <li>
            //                         <Link to={"/create-user"} className="waves-effect waves-dark">
            //                             <span className="pcoded-mtext">Create User</span>
            //                         </Link>
            //                     </li>
            //                 </ul>
            //             </li>
            //         </ul>
            //         <div className="pcoded-navigation-label">Advanced</div>
            //         <ul className="pcoded-item pcoded-left-item">
            //             <li className="pcoded-hasmenu">
            //                 <a href="javascript:void(0)" className="waves-effect waves-dark">
            //                     <span className="pcoded-micon"><i className="feather icon-home" /></span>
            //                     <span className="pcoded-mtext">Estate Management</span>
            //                 </a>
            //                 <ul className="pcoded-submenu">
            //                     <li>
            //                         <a href="index.html" className="waves-effect waves-dark">
            //                             <span className="pcoded-mtext">List</span>
            //                         </a>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li className="pcoded-hasmenu">
            //                 <a href="javascript:void(0)" className="waves-effect waves-dark">
            //                     <span className="pcoded-micon"><i className="feather icon-users" /></span>
            //                     <span className="pcoded-mtext" style={{ fontSize: 13.5 }}>Resident Management</span>
            //                 </a>
            //                 <ul className="pcoded-submenu">
            //                     <li>
            //                         <Link to={"/resident-profile"} className="waves-effect waves-dark">
            //                             <span className="pcoded-mtext">Residents Profile</span>
            //                         </Link>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li className="pcoded-hasmenu">
            //                 <a href="javascript:void(0)" className="waves-effect waves-dark">
            //                     <span className="pcoded-micon"><i className="feather icon-user-plus" /></span>
            //                     <span className="pcoded-mtext">Visitor Management</span>
            //                 </a>
            //                 <ul className="pcoded-submenu">
            //                     <li>
            //                         <Link to={"/visitor-form"} className="waves-effect waves-dark">
            //                             <span className="pcoded-mtext">New Visitor</span>
            //                         </Link>
            //                     </li>
            //                 </ul>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
