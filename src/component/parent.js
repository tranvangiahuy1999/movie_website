import React from 'react';
import LoginScreen from './login';
import HomeScreen from './home';
import UsernameFilter from './usernamefilter';
import HiddenPassword from './hiddenpassword';
import WarnText from './warntext';

export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loggedin: false,
            username:'',
            password:'',
            userwarn:'',
            passwarn:'',
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.username === ''){
            this.setState({userwarn:'Please enter a valid email or phone number.'})
        } else if(this.state.password === ''){
            this.setState({passwarn:'Your password must contain between 4 and 60 characters.'})
        } else {
            //Do something in here
            this.setState({
                loggedin: true,
            })
        }
    }

    render(){
        return(
            <div>
                {(this.state.loggedin)? <HomeScreen></HomeScreen>:<LoginScreen onsubmit={this.handleSubmit} username={<UsernameFilter username={(e)=>{this.setState({username: e.target.value, userwarn:''})}}></UsernameFilter>} userwarn={<WarnText warntext={this.state.userwarn}></WarnText>} password={<HiddenPassword password={(e)=>{this.setState({password: e.target.value, passwarn:''})}}></HiddenPassword>} passwarn={<WarnText warntext={this.state.passwarn}></WarnText>}></LoginScreen>}
            </div>
        )
        
    }
}