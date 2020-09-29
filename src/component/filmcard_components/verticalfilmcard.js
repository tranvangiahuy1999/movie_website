import React from 'react';
import { FaStar, FaCalendar } from "react-icons/fa";

export default class VerFilmCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='each-ver-card'>
                <div>
                    <img className='vertical-movie-image' src={this.props.movieimageurl}></img>
                </div>
                <div className='card-bottom'>
                    <div className='movie-name'>{this.props.moviename}</div>
                    <div className='movie-info'>
                        <FaStar color='yellow' size={13}></FaStar>
                        <div className='movie-text-info'>
                            {this.props.movierate} |
                        </div>
                        <FaCalendar color='azure' size={13}></FaCalendar>
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