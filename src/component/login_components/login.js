import React from 'react';
import LoginForm from './loginForm'

export default class LoginScreen extends React.Component {
    render(){
        return(
            <div className='login-container'>
                <div  className='login-header'>
                    <img alt='netflix_logo' className='login-logo' src={require('../../resources/img/background/netflix-logo.png')} />
                </div>
                <div className='login-body'>
                    <LoginForm onsubmit={this.props.onsubmit} username={this.props.username} userwarn={this.props.userwarn} password={this.props.password} passwarn={this.props.passwarn}></LoginForm>
                </div>
                    <div className='login-footer'>
                </div>
            </div>
        )
    }
}