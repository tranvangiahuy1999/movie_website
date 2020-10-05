import React from 'react';
import HeadBar from './headbar';
import HorFilmCard from '../filmcard_components/horizontalfilmcard';
import VerFilmCard from '../filmcard_components/verticalfilmcard';
import PopularListData from '../../data/data';
import FilmList from '../filmcard_components/filmlist';

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
                    <div className='grid-container'>
                        {
                            PopularListData.results.map((item, key)=>{
                                return(
                                    <VerFilmCard key={item.id} movieimageurl={item.imageurl} moviename={item.moviename} movierate={item.movierate} moviedate={item.moviedate} movietype={item.movietype}></VerFilmCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}