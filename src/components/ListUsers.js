import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';

class ListUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isFetching: true
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.users && nextProps.user.users != this.props.user.users) {
            this.setState({ users: nextProps.user.users.payload, isFetching: false });
        }
    }

    showUsers(users) {
        return (
            users.map((items, i) => <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{items.email}</td>
                <td>{items.username}</td>
                <td></td>
            </tr>)
        )
    }
    render() {
        return (
            <div className="dt-content">
                <div className="col-xl-12">
                    <div className="dt-entry__header">
                        <div className="dt-entry__heading">
                            <h3 className="dt-entry__title">All users</h3>
                        </div>
                    </div>
                    <div className="dt-card overflow-hidden">
                        <div className="dt-card__body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th className="text-uppercase" scope="col">Email</th>
                                            <th className="text-uppercase" scope="col">Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !this.state.isFetching ? this.showUsers(this.state.users || []) : null
                                        }
                                    </tbody>
                                    {/* <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Chris</td>
                                        <td>Crowder</td>
                                        <td><a href="javascript:void(0)" className="btn-link">@c.crowder</a></td>
                                    </tr>
                                </tbody> */}
                                </table>
                                {
                                    this.state.isFetching ? <h4 style={{ textAlign: "center", padding: 10 }}>Loading...</h4> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div>
            //     <div className="page-header">
            //         <div className="page-block">
            //             <div className="row align-items-center">
            //                 <div className="col-md-8">
            //                     <div className="page-header-title">
            //                         <h4 style={{ fontWeight: "bold" }} className="m-b-10">Users</h4>
            //                     </div>
            //                     <ul className="breadcrumb">
            //                         <li className="breadcrumb-item">
            //                             <a href="index.html">
            //                                 <i className="feather icon-home"></i>
            //                             </a>
            //                         </li>
            //                         <li className="breadcrumb-item"><a href="#!">Users</a>
            //                         </li>
            //                         <li className="breadcrumb-item">
            //                             <a href="#!">All Users</a>
            //                         </li>
            //                     </ul>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="pcoded-inner-content">
            //         <div className="main-body">
            //             <div className="card">
            //                 <div className="card-header">
            //                     <h5>List of registered users</h5>
            //                     <button onClick={() => this.test()}>RRR</button>
            //                     <div className="card-header-right">
            //                         <ul className="list-unstyled card-option">
            //                             <li className="first-opt">
            //                                 <i className="feather icon-chevron-left open-card-option"></i>
            //                             </li>
            //                             <li><i className="feather icon-maximize full-card"></i></li>
            //                             <li><i className="feather icon-minus minimize-card"></i></li>
            //                             <li><i className="feather icon-refresh-cw reload-card"></i></li>
            //                             <li><i className="feather icon-trash close-card"></i></li>
            //                             <li><i className="feather icon-chevron-left open-card-option"></i></li>
            //                         </ul>
            //                     </div>
            //                 </div>
            //                 <div className="card-block table-border-style">
            //                     <div className="table-responsive">
            //                         <table className="table">
            //                             <thead>
            //                                 <tr>
            //                                     <th>#</th>
            //                                     <th>Email</th>
            //                                     <th>Username</th>
            //                                 </tr>
            //                             </thead>
            //                             <tbody>
            //                                 {
            //                                     !this.state.isFetching ? this.showUsers(this.state.users || []) : null
            //                                 }
            //                             </tbody>
            //                         </table>
            //                         {
            //                             this.state.isFetching ? <h4 style={{ textAlign: "center", padding: 10 }}>Loading...</h4> : null
            //                         }
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
