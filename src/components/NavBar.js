import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    logout() {
        this.props.logout();
    }
    render() {
        return (
            <header className="dt-header">
                <div className="dt-header__container">
                    <div className="dt-brand">
                        <div className="dt-brand__tool" data-toggle="main-sidebar">
                            <i className="icon icon-xl icon-menu-fold d-none d-lg-inline-block" />
                            <i className="icon icon-xl icon-menu d-lg-none" />
                        </div>
                        <span className="dt-brand__logo">
                            <a className="dt-brand__logo-link" href="index.html">
                                <img style={{ width: 135 }} className="img-fluid" src="src/imgs/NEW_HEADERELGC.png" alt="Theme-Logo" />
                            </a>
                        </span>
                    </div>
                    <div className="dt-header__toolbar">
                        <form className="search-box d-none d-lg-block">
                            <input className="form-control border-0" placeholder="Search in app..." defaultValue type="search" />
                            <span className="search-icon text-light-gray"><i className="icon icon-search icon-lg" /></span>
                        </form>
                        <div className="dt-nav-wrapper">
                            <ul className="dt-nav d-lg-none">
                                <li className="dt-nav__item dt-notification-search dropdown">
                                    <a href="#" className="dt-nav__link dropdown-toggle no-arrow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon icon-search-new icon-fw icon-lg" /> </a>
                                    <div className="dropdown-menu">
                                        <form className="search-box right-side-icon">
                                            <input className="form-control form-control-lg" type="search" placeholder="Search in app..." />
                                            <button type="submit" className="search-icon"><i className="icon icon-search icon-lg" /></button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <ul className="dt-nav d-lg-none">
                                <li className="dt-nav__item dt-notification dropdown">
                                    <a href="#" className="dt-nav__link dropdown-toggle no-arrow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon icon-notification icon-fw dt-icon-alert" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                        <div className="dropdown-menu-header">
                                            <h4 className="title">Notifications (9)</h4>
                                            <div className="ml-auto action-area">
                                                <a href="javascript:void(0)">Mark All Read</a> <a className="ml-2" href="javascript:void(0)">
                                                    <i className="icon icon-setting icon-lg text-light-gray" /> </a>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu-body ps-custom-scrollbar">
                                            <div className="h-auto">
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body">
                                                        <span className="message">
                                                            <span className="user-name">Stella Johnson</span> and <span className="user-name">Chris
                          Harris</span>
                                                            have birthdays today. Help them celebrate!
                      </span>
                                                        <span className="meta-date">8 hours ago</span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body">
                                                        <span className="message">
                                                            <span className="user-name">Jonathan Madano</span> commented on your post.
                      </span>
                                                        <span className="meta-date">9 hours ago</span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body">
                                                        <span className="message">
                                                            <span className="user-name">Chelsea Brown</span> sent a video recomendation.
                      </span>
                                                        <span className="meta-date">
                                                            <i className="icon icon-menu-right text-primary icon-fw mr-1" />
                                                            13 hours ago
                      </span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body">
                                                        <span className="message">
                                                            <span className="user-name">Alex Dolgove</span> and <span className="user-name">Chris Harris</span>
                                                            like your post.
                      </span>
                                                        <span className="meta-date">
                                                            <i className="icon icon-like text-light-blue icon-fw mr-1" />
                                                            yesterday at 9:30
                      </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="javascript:void(0)" className="card-link"> See All <i className="icon icon-arrow-right icon-fw" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dt-nav__item dt-notification dropdown">
                                    <a href="#" className="dt-nav__link dropdown-toggle no-arrow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon icon-chat-new icon-fw" /> </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                        <div className="dropdown-menu-header">
                                            <h4 className="title">Messages (6)</h4>
                                            <div className="ml-auto action-area">
                                                <a href="javascript:void(0)">Mark All Read</a> <a className="ml-2" href="javascript:void(0)">
                                                    <i className="icon icon-setting icon-lg text-light-gray" /></a>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu-body ps-custom-scrollbar">
                                            <div className="h-auto">
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body text-truncate">
                                                        <span className="user-name mb-1">Chris Mathew</span>
                                                        <span className="message text-light-gray text-truncate">Okay.. I will be waiting for
                        your...</span>
                                                    </span>
                                                    <span className="action-area h-100 min-w-80 text-right">
                                                        <span className="meta-date mb-1">8 hours ago</span>
                                                        <span className="toggle-button" data-toggle="tooltip" data-placement="left" title="Mark as read">
                                                            <span className="show"><i className="icon icon-circle-o icon-fw f-10 text-light-gray" /></span>
                                                            <span className="hide"><i className="icon icon-circle icon-fw f-10 text-light-gray" /></span>
                                                        </span>
                                                    </span> </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body text-truncate">
                                                        <span className="user-name mb-1">Alia Joseph</span>
                                                        <span className="message text-light-gray text-truncate">
                                                            Alia Joseph just joined Messenger! Be the first to send a welcome message or sticker.
                      </span>
                                                    </span>
                                                    <span className="action-area h-100 min-w-80 text-right">
                                                        <span className="meta-date mb-1">9 hours ago</span>
                                                        <span className="toggle-button" data-toggle="tooltip" data-placement="left" title="Mark as read">
                                                            <span className="show"><i className="icon icon-circle-o icon-fw f-10 text-light-gray" /></span>
                                                            <span className="hide"><i className="icon icon-circle icon-fw f-10 text-light-gray" /></span>
                                                        </span>
                                                    </span> </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body text-truncate">
                                                        <span className="user-name mb-1">Joshua Brian</span>
                                                        <span className="message text-light-gray text-truncate">
                                                            Alex will explain you how to keep the HTML structure and all that.
                      </span>
                                                    </span>
                                                    <span className="action-area h-100 min-w-80 text-right">
                                                        <span className="meta-date mb-1">12 hours ago</span>
                                                        <span className="toggle-button" data-toggle="tooltip" data-placement="left" title="Mark as read">
                                                            <span className="show"><i className="icon icon-circle-o icon-fw f-10 text-light-gray" /></span>
                                                            <span className="hide"><i className="icon icon-circle icon-fw f-10 text-light-gray" /></span>
                                                        </span>
                                                    </span> </a>
                                                <a href="javascript:void(0)" className="media">
                                                    <img className="dt-avatar mr-3" src="https://via.placeholder.com/150x150" alt="User" />
                                                    <span className="media-body text-truncate">
                                                        <span className="user-name mb-1">Domnic Brown</span>
                                                        <span className="message text-light-gray text-truncate">Okay.. I will be waiting for
                        your...</span>
                                                    </span>
                                                    <span className="action-area h-100 min-w-80 text-right">
                                                        <span className="meta-date mb-1">yesterday</span>
                                                        <span className="toggle-button" data-toggle="tooltip" data-placement="left" title="Mark as read">
                                                            <span className="show"><i className="icon icon-circle-o icon-fw f-10 text-light-gray" /></span>
                                                            <span className="hide"><i className="icon icon-circle icon-fw f-10 text-light-gray" /></span>
                                                        </span>
                                                    </span> </a>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="javascript:void(0)" className="card-link"> See All <i className="icon icon-arrow-right icon-fw" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="dt-nav">
                                <li className="dt-nav__item dropdown">
                                    <a href="#" className="dt-nav__link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="flag-icon flag-icon-us flag-icon-lg" /><span>English</span> </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-us mr-2" /><span>English</span> </a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-cn mr-2" /><span>Chinese</span> </a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-es mr-2" /><span>Spanish</span> </a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-fr mr-2" /><span>French</span> </a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-it mr-2" /><span>Italian</span> </a>
                                        <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="flag-icon flag-icon-sa mr-2" /><span>Arabic</span> </a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="dt-nav d-lg-none">
                                <li className="dt-nav__item dropdown">
                                    <a href="#" className="dt-nav__link dropdown-toggle no-arrow dt-avatar-wrapper" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="dt-avatar size-40" src="https://via.placeholder.com/150x150" alt="Domnic Harris" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dt-avatar-wrapper flex-nowrap p-6 mt--5 bg-gradient-purple text-white rounded-top">
                                            <img className="dt-avatar" src="https://via.placeholder.com/150x150" alt="Domnic Harris" />
                                            <span className="dt-avatar-info">
                                                <span className="dt-avatar-name">Bob Hyden</span>
                                                <span className="f-12">Administrator</span>
                                            </span>
                                        </div>
                                        <a className="dropdown-item" href="javascript:void(0)"> <i className="icon icon-user-o icon-fw mr-2 mr-sm-1" />Account
              </a> <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="icon icon-setting icon-fw mr-2 mr-sm-1" />Setting </a>
                                        <a className="dropdown-item" href="page-login.html"> <i className="icon icon-edit icon-fw mr-2 mr-sm-1" />Logout
              </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);