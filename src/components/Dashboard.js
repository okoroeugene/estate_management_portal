import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="page-header-title">
                                    <h4 className="m-b-10">Dashboard</h4>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="feather icon-home" />
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#!">Home</a> </li>
                                    <li className="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ breadcrumb ] end */}
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="page-body">
                                {/* [ page content ] start */}
                                <div className="row">
                                    {/* page statustic card start */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h4 className="text-c-yellow">$30200</h4>
                                                        <h6 className="text-muted m-b-0">All Earnings</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <i className="feather icon-bar-chart-2 f-28" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-c-yellow">
                                                <div className="row align-items-center">
                                                    <div className="col-9">
                                                        <p className="text-white m-b-0">% change</p>
                                                    </div>
                                                    <div className="col-3 text-right">
                                                        <i className="feather icon-trending-up text-white f-16" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h4 className="text-c-green">290+</h4>
                                                        <h6 className="text-muted m-b-0">Page Views</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <i className="feather icon-file-text f-28" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-c-green">
                                                <div className="row align-items-center">
                                                    <div className="col-9">
                                                        <p className="text-white m-b-0">% change</p>
                                                    </div>
                                                    <div className="col-3 text-right">
                                                        <i className="feather icon-trending-up text-white f-16" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h4 className="text-c-red">145</h4>
                                                        <h6 className="text-muted m-b-0">Task</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <i className="feather icon-calendar f-28" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-c-red">
                                                <div className="row align-items-center">
                                                    <div className="col-9">
                                                        <p className="text-white m-b-0">% change</p>
                                                    </div>
                                                    <div className="col-3 text-right">
                                                        <i className="feather icon-trending-down text-white f-16" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-block">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h4 className="text-c-blue">500</h4>
                                                        <h6 className="text-muted m-b-0">Downloads</h6>
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <i className="feather icon-thumbs-down f-28" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-c-blue">
                                                <div className="row align-items-center">
                                                    <div className="col-9">
                                                        <p className="text-white m-b-0">% change</p>
                                                    </div>
                                                    <div className="col-3 text-right">
                                                        <i className="feather icon-trending-down text-white f-16" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* page statustic card end */}
                                    {/* widget-statstic start */}
                                </div>
                                {/* [ page content ] end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;
