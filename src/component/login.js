import React from 'react';
import '../style/login.css';
import LoginForm from './loginForm'

export default class LoginScreen extends React.Component {
    render(){
        return(
            <div className='login-container'>
                <div>
                    <img className='login-logo' src={require('../resources/img/background/netflix-logo.png')} />
                </div>
                <div className='login-body'>
                    <LoginForm></LoginForm>
                </div>
                    <div className='login-footer'>
                </div>
            </div>
        )
    }
}