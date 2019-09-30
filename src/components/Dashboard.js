import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        console.log(this.props.user.current);
    }
    render() {
        return (
            <div className="dt-content">
                <div className="ant-row">
                    <div className="gx-order-lg-2 ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24">
                        <div className="ant-card gx-card-widget  ant-card-bordered">
                            <div className="ant-card-body">
                                <h2>Hello {this.props.user.current.username}</h2>
                                <p>Welcome to or estate management portal</p>
                                {/* <p><h4>Role:</h4></p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-row">
                    <div className="col-xl-12 order-sm-1">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="dt-card text-white bg-cyan">
                                    <div className="dt-card__body p-4">
                                        <div className="media">
                                            <i className="icon icon-diamond icon-4x mr-2 align-self-center" />
                                            <div className="media-body">
                                                <h2 className="mb-1 h1 font-weight-semibold text-white">09</h2>
                                                <p className="mb-0">All users</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dt-card text-white bg-warning">
                                    <div className="dt-card__body p-4">
                                        <div className="media">
                                            <i className="icon icon-tasks icon-4x mr-2 align-self-center" />
                                            <div className="media-body">
                                                <h2 className="mb-1 h1 font-weight-semibold text-white">687</h2>
                                                <p className="mb-0">Residents</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dt-card text-white bg-teal">
                                    <div className="dt-card__body p-4">
                                        <div className="media">
                                            <i className="icon icon-team icon-4x mr-2 align-self-center" />
                                            <div className="media-body">
                                                <h2 className="mb-1 h1 font-weight-semibold text-white">04</h2>
                                                <p className="mb-0">Visitors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dt-card text-white bg-danger">
                                    <div className="dt-card__body p-4">
                                        <div className="media">
                                            <i className="icon icon-files icon-4x mr-2 align-self-center" />
                                            <div className="media-body">
                                                <h2 className="mb-1 h1 font-weight-semibold text-white">09</h2>
                                                <p className="mb-0">Files</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
