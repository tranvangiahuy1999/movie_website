import React from 'react';
import '../style/login.css';
import HiddenPassword from './hiddenpassword';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='login-form'>
                <div className='form-content'>
                    <div className='title'>Sign In</div>
                    <form onSubmit={this.props.onsubmit}>
                    <label>
                        <div className='input-box'>
                            {this.props.username}
                            {this.props.userwarn}
                        </div>
                        <div className='input-box'>
                            {this.props.password}
                            {this.props.passwarn}
                        </div>
                    </label>
                    <div className='button-wrapper'>
                        <button className='btn signin-button' type="submit">Sign In</button>
                    </div>
                    <div className='area'>
                        <input type='checkbox'></input><text className='text' id='remember-text'>Remember me</text>
                    </div>
                    <div className='area'>
                        <text className='big-text'>New to Netflix? </text><a href='https://reactjs.org/docs/forms.html' className='big-text' id='link'>Sign up now.</a>
                    </div>
                    <div className='area'>
                        <text className='text'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</text>
                    </div>
                    </form>
                    <div></div>
                </div>
            </div>
        )
    }
}