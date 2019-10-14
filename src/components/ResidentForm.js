import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import axios from 'axios';
import { greeting } from '../utils';
import { NotificationManager } from 'react-notifications';

class ResidentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProcessing: false
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.resident.created && nextProps.resident.created != this.props.resident.created) {
            this.setState({ isProcessing: false });
            NotificationManager.success('You have successfully created a resident profile', 'Success');
            this.residentRef.reset();
        }
        if (nextProps.resident.error && nextProps.resident.error != this.props.resident.error) {
            this.setState({ isProcessing: false });
            NotificationManager.error(nextProps.resident.error, 'Error');
            // this.residentRef.reset();
        }
    }
    handleSubmit() {
        this.setState({ isProcessing: true });
        setTimeout(() => {
            return this.props.residentForm({
                house_hold_name: this.refs.house_hold_name.value,
                surname: this.refs.surname.value,
                firstname: this.refs.firstname.value,
                middlename: this.refs.middlename.value,
                occupants: this.refs.occupants.value,
                primary_mobile: this.refs.primary_mobile.value,
                secondary_mobile: this.refs.secondary_mobile.value,
                nationality: this.refs.nationality.value,
                state: this.refs.state.value,
                local_government: this.refs.local_government.value,
                email: this.refs.email.value,
                permanent_address: this.refs.permanent_address.value,
                office_address: this.refs.office_address.value,
                occupation: this.refs.occupation.value
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
                                <div className="ant-card-head-title">Resident Profile</div>
                            </div>
                        </div>
                        {/* <div class="dt-card__body text-center">
                            <p class="lead">Success Toast</p>
                            <a href="javascript:void(0)" class="btn btn-outline-success success-toast ">Click me</a>
                        </div> */}
                        <div className="ant-card-body">
                            <form ref={(e) => this.residentRef = e} className="ant-form ant-form-horizontal">
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="house_hold_name" className="ant-form-item-required" title="house_hold_name">House hold name</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="house_hold_name" ref={'house_hold_name'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="surname" className="ant-form-item-required" title="surname">Surname</label>
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
                                        <label htmlFor="middlename" className="ant-form-item-required" title="Firstname">Middlename</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="middlename" ref={'middlename'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="occupants" className="ant-form-item-required" title="occupants">Occupants</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="occupants" ref={'occupants'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="occupants" className="ant-form-item-required" title="gender">Occupants</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="gender" ref={'gender'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="primary_mobile" className="ant-form-item-required" title="mobile">Primary Mobile</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="primary_mobile" ref={'primary_mobile'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="secondary_mobile" className="ant-form-item-required" title="secondary_mobile">Secondary Mobile</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="secondary_mobile" ref={'secondary_mobile'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="nationality" className="ant-form-item-required" title="nationality">Nationality</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="nationality" ref={'nationality'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="state" className="ant-form-item-required" title="state">State</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="state" ref={'state'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="local_government" className="ant-form-item-required" title="local_government">Local Government</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="local_government" ref={'local_government'} type="text" className="ant-input" />
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
                                        <label htmlFor="permanent_address" className="ant-form-item-required" title="permanent_address">Permanent Address</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="permanent_address" ref={'permanent_address'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="office_address" className="ant-form-item-required" title="office_address">Office Address</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="office_address" ref={'office_address'} type="text" className="ant-input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
                                        <label htmlFor="occupation" className="ant-form-item-required" title="occupation">Occupation</label>
                                    </div>
                                    <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
                                        <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                                <input id="occupation" ref={'occupation'} type="text" className="ant-input" />
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
    resident: state.resident
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResidentForm);
