import React from 'react';

export default class WarnText extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <text className='warn-text'>{this.props.warntext}</text>
        )
    }
}