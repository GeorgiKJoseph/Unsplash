import React, {Component} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import { googleOauth } from '../constants/googleOauth'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import {requestLogin, requestLogout} from '../actions/logActions'

class Header extends Component{

    responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
    }
    handleLogin = (response) => {
        this.props.requestLogin(response.profileObj)
        console.log(response)
        console.log(response.profileObj.email)
    }
    handleLogout = () => {
        this.props.requestLogout()
    }
    render() {
        if (this.props.isLoggedIn){
            return (
                <GoogleLogout
                clientId={googleOauth.client_id}
                render = { renderProps => (
                    <img src={this.props.loginStatus.userObj.imageUrl}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled} />
                    )
                }
                buttonText="Logout"
                onLogoutSuccess={this.handleLogout}
                />
            )
        }else {
            return (
                <GoogleLogin
                clientId={googleOauth.client_id}
                render = {renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Google Login
                    </button>
                )}
                buttonText="Login"
                onSuccess={this.handleLogin}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            )
        }
    }
}

const mapStateToProps = state => ({
    isLoggedIn : state.loginStatus.isLoggedIn,
    loginStatus : state.loginStatus
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestLogin,
    requestLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);