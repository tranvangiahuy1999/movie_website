import React from 'react';

export default class FilmList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='type-name'>{this.props.title}</div>
                <div className='film-list'>
                    {this.props.data}
                </div>
            </div>
        )
    }
}