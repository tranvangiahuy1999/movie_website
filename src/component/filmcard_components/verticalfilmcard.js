import React from 'react';
import { FaStar, FaCalendar } from "react-icons/fa";

export default class VerFilmCard extends React.Component {
    render(){
        return(
            <div className='each-ver-card'>
                <div>
                    <img alt={this.props.imagename} className='vertical-movie-image' src={this.props.imageurl}></img>
                </div>
                <div className='card-bottom'>
                    <h4 className='movie-name'>{this.props.moviename}</h4>
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
                    <div className='movie-genres-info'>
                        {this.props.moviegenre}
                    </div>
                </div>
            </div>
        )
    }
}