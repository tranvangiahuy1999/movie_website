import React from 'react';

export default class WarnText extends React.Component{
    render(){
        return(
            <text className='warn-text'>{this.props.warntext}</text>
        )
    }
}