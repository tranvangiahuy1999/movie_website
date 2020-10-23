import React from 'react';
import LoginScreen from '../login_components/login';
import HomeScreen from '../home_components/home';
import UsernameFilter from '../login_components/usernamefilter';
import HiddenPassword from '../login_components/hiddenpassword';
import WarnText from '../login_components/warntext';

export default class Router extends React.Component {
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

    async handleSubmit(e){
        e.preventDefault();
        if(this.state.username === ''){
            this.setState({userwarn:'Please enter a valid email or phone number.'})
        } 
        if(this.state.password === ''){
            this.setState({passwarn:'Your password must contain between 4 and 60 characters.'})
        } 
        if(this.state.username !== '' && this.state.password !== '') {
            await localStorage.setItem('logged_in', true);
            this.setState({
                loggedin: true,
            })
        }
    }

    render(){
        return(
            <div>
                {(this.state.loggedin || localStorage.getItem('logged_in'))? <HomeScreen></HomeScreen>:<LoginScreen onsubmit={this.handleSubmit} username={<UsernameFilter className={this.state.userwarn===''?'input-filter':'input-filter-warn'} username={(e)=>{this.setState({username: e.target.value, userwarn:''})}}></UsernameFilter>} userwarn={<WarnText warntext={this.state.userwarn}></WarnText>} password={<HiddenPassword className={this.state.passwarn===''?'input-filter':'input-filter-warn'} password={(e)=>{this.setState({password: e.target.value, passwarn:''})}}></HiddenPassword>} passwarn={<WarnText warntext={this.state.passwarn}></WarnText>}></LoginScreen>}
            </div>
        )
        
    }
}