import React from 'react';
import LoginForm from './loginForm'

export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='login-container'>
                <div>
                    <img className='login-logo' src={require('../../resources/img/background/netflix-logo.png')} />
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