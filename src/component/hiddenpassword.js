import React from 'react';

export default class HiddenPassword extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hidden: true,
        }
    }

    render(){
        return(
            <div>
                <input className='input-filter' type="password" onChange={this.props.password} placeholder='Password'/>
            </div>
        )
    }
}