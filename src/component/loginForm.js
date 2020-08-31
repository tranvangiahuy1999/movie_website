import React from 'react';
import '../style/login.css';
import HiddenPassword from './hiddenpassword';

export default class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            userwarn:'',
            passwarn:'',
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.setInput=this.setInput.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.username === ''){
            this.setState({userwarn:'Please enter a valid email or phone number.'})
        } else if(this.state.password === ''){
            this.setState({passwarn:'Your password must contain between 4 and 60 characters.'})
        } else {
            //Do something in here
            
        }
    }

    setInput(text) {
        this.setState({
          password: text,
          passwarn:''
        });
      }

    render(){
        return(
            <div className='login-form'>
                <div className='form-content'>
                    <div className='title'>Sign In</div>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        <div className='input-box'>
                            <div>
                                <input className='input-filter' type="text" onChange={(e)=>this.setState({username:e.target.value, userwarn:''})} placeholder='Email or phone number'/>
                            </div>
                            <text className='warn-text'>{this.state.userwarn}</text>
                        </div>
                        <div className='input-box'>
                        <HiddenPassword password={(e) => this.setInput(e.target.value)}></HiddenPassword>
                        <text className='warn-text'>{this.state.passwarn}</text>
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