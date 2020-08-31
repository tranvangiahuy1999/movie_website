import React from 'react';

export default class UsernameFilter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input className='input-filter' type="text" onChange={this.props.username} placeholder='Email or phone number'/>
        )
    }
}