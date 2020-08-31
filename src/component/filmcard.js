import React from 'react';

export default class FilmCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='each-card'>
                <div>
                    <img className='movie-image' src={this.props.movieimageurl}></img>
                </div>
                <div className='card-bottom'>
                    <div className='movie-name'>{this.props.moviename}</div>
                    <div className='movie-info'>
                        <div className='movie-text-info'>
                            {this.props.movierate} |
                        </div>
                        <div className='movie-text-info'>
                            {this.props.moviedate}
                        </div>
                    </div>
                    <div className='movie-text-info'>
                        {this.props.movietype}
                    </div>
                </div>
            </div>
        )
    }
}