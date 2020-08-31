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
            <div style={{display:'flex', flexDirection:'row'}}>
                <input className='input-filter' type={(this.state.hidden)?"password":"text"} onChange={this.props.password} placeholder='Password'/>        
            </div>
        )
    }
}