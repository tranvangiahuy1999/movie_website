import React from 'react';
import HeadBar from './headbar';
import HorFilmCard from '../filmcard_components/horizontalfilmcard';
import VerFilmCard from '../filmcard_components/verticalfilmcard';
import PopularListData from '../../data/data';
import FilmList from '../filmcard_components/filmlist'

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='home-container'>
                <HeadBar></HeadBar>
                <div className='home-content'>
                    <FilmList title='Popular' data={
                        PopularListData.resultsHor.map((item, key) => {
                            return(
                                <HorFilmCard key={item.id} imageurl={item.imageurl}></HorFilmCard>
                            )
                        })}></FilmList>
                    <h2 className='title'>Now Playing</h2>
                        <div className='film-list-box-wrapper'>
                            <ul class="row" className='film-list-box'>
                            {
                                PopularListData.results.map((item, key)=>{
                                    return(
                                        <li class="col-lg-3 col-md-3 col-sm-6"><VerFilmCard key={item.id} movieimageurl={item.imageurl} moviename={item.moviename} movierate={item.movierate} moviedate={item.moviedate} movietype={item.movietype}></VerFilmCard></li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}