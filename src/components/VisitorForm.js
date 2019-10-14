import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class VisitorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false,
            token: ""
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.visitor.token && nextProps.visitor.token != this.props.visitor.token) {
            this.setState({ isProcessing: false, token: nextProps.visitor.token });
            NotificationManager.success('You have successfully created a visitor profile', 'Success');
            this.visitorRef.reset();
        }
    }

    handleSubmit() {
        this.setState({ isProcessing: true });
        setTimeout(() => {
            return this.props.visitorForm({
                surname: this.refs.surname.value,
                firstname: this.refs.firstname.value,
                gender: this.refs.gender.value,
                mobile: this.refs.mobile.value,
                email: this.refs.email.value,
                no_of_visitors: this.refs.no_of_visitors.value,
                visit_date: new Date()
            })
        }, 3000);
    }

    render() {
        return (
            <div className="dt-content">
                <div className="ant-col-12" style={{ margin: '0 auto' }}>
                    <div className="ant-card gx-card ant-card-bordered ant-card-wider-padding ant-card-padding-transition">
                        <div className="ant-card-head">
                            <div className="ant-card-head-wrapper">
                                <div className="ant-card-head-title">Visitor Form</div>
                            </div>
                        </div>

                        <div className="ant-card-body">
                            {
                                this.state.token ? <div className="alert alert-info text-center" style={{ height: 50 }}>
                                    <h4>TOKEN: <b>{this.state.token}</b></h4>
                                </div> : null
                            }
                            <form ref={(e) => this.visitorRef = e} className="ant-form ant-form-horizontal">
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="surname" className="ant-form-item-required" title="Surname">Surname</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="surname" ref={'surname'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="firstname" className="ant-form-item-required" title="Firstname">Firstname</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="firstname" ref={'firstname'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="gender" className="ant-form-item-required" title="gender">Gender</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="gender" ref={'gender'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="mobile" className="ant-form-item-required" title="mobile">Mobile</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="mobile" ref={'mobile'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="email" className="ant-form-item-required" title="email">Email</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="email" ref={'email'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="number" className="ant-form-item-required" title="mobile">No. of visitors</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="number" ref={'no_of_visitors'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                </div>
                                <div className="form-group text-center">
                                    {
                                        this.state.isProcessing ? <button type="button" className="ant-btn ant-btn-primary ant-btn-loading" ant-click-animating-without-extra-node="false">
                                            <i aria-label="icon: loading" className="anticon anticon-loading">
                                                <svg viewBox="0 0 1024 1024" className="anticon-spin" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                                                </svg>
                                            </i>
                                            <span>Processing...</span>
                                        </button> : <button
                                            onClick={() => this.handleSubmit()}
                                            type="submit"
                                            className="btn btn-primary">Shoot</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    visitor: state.visitor
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VisitorForm);
