import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isProcessing: false
        }
    }

    handleClick(e) {
        this.setState({ isProcessing: true })
        this.props.doLogin({
            email: this.state.email,
            password: this.state.password
        })
        e.preventDefault();
    }

    handleChange(prop, value) {
        this.setState({ [prop]: value.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.isLoggedIn) {
            const path = this.props.location.state ? this.props.location.state.from.pathname : "/";
            // this.props.history.push(path);
            window.location.href = path;
        }
        if (nextProps.login.error && nextProps.login.error !== this.props.login.error) {
            this.setState({ isProcessing: false })
            toastr.error(nextProps.login.error)
        }
        if (nextProps.login.userRoleError && nextProps.login.userRoleError !== this.props.login.userRoleError) {
            this.setState({ isProcessing: false })
            toastr.error("Sorry, you cannot access this site. Kindly go to the mobile app to continue your session.")
        }
    }
    render() {
        return (
            <section className="login-block">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="md-float-material form-material">
                                <div className="text-center">
                                    <img
                                        src="src/imgs/Frame.png"
                                        style={{
                                            width: 150,
                                            marginBottom: -30
                                        }}
                                        alt="logo.png" />
                                </div>
                                <div className="auth-box card">
                                    <div className="card-block">
                                        <div className="row m-b-20">
                                            <div className="col-md-12">
                                                <h3 className="text-center">Sign In</h3>
                                            </div>
                                        </div>
                                        <div className="form-group form-primary">
                                            <input
                                                type="text"
                                                name="email"
                                                value={this.state.email}
                                                className="form-control"
                                                required=""
                                                placeholder="Your Email Address"
                                                onChange={this.handleChange.bind(this, "email")}
                                            />
                                            <span className="form-bar"></span>
                                        </div>
                                        <div className="form-group form-primary">
                                            <input
                                                type="password"
                                                name="password"
                                                value={this.state.password}
                                                className="form-control"
                                                required=""
                                                placeholder="Password"
                                                onChange={this.handleChange.bind(this, "password")}
                                            />
                                            <span className="form-bar"></span>
                                        </div>
                                        {/* <div className="row m-t-25 text-left">
                                            <div className="col-12">
                                                <div className="checkbox-fade fade-in-primary d-">
                                                    <label>
                                                        <input type="checkbox" value="" />
                                                        <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                        <span className="text-inverse">Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="forgot-phone text-right f-right">
                                                    <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row m-t-30">
                                            <div className="col-md-12">
                                                <button
                                                    type="button"
                                                    onClick={this.handleClick.bind(this)}
                                                    disabled={this.state.isProcessing ? true : false}
                                                    className="btn hor-grd btn-grd-inverse btn-block waves-effect waves-light text-center m-b-20"
                                                >
                                                    Sign in
                                                    {
                                                        this.state.isProcessing ?
                                                            <div style={{
                                                                height: 0,
                                                                marginTop: 4, marginLeft: 120
                                                            }} class="preloader3 loader-block">
                                                                <div class="circ1"></div>
                                                                <div class="circ2"></div>
                                                                <div class="circ3"></div>
                                                                <div class="circ4"></div>
                                                            </div> : null
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-10">
                                                <p className="text-inverse text-left m-b-0">Thank you.</p>
                                                <p className="text-inverse text-left"><a href="index.html"><b className="f-w-600">Back to
                                                        website</b></a></p>
                                            </div>
                                            <div className="col-md-2">
                                                <img
                                                    style={{ width: 50 }}
                                                    src="src/imgs/Frame.png"
                                                    alt="small-logo.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
