import React from 'react';

export default class FilmList extends React.Component {
    render(){
        return(
            <div>
                <h2 className='title'>{this.props.title}</h2>
                <div className='film-list'>
                    {this.props.data}
                </div>
            </div>
        )
    }
}