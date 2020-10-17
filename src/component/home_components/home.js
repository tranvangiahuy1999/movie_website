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

        const DataMapper = (data, orient)=> {
            if(orient==='hori'){
                return data.map((item, key) => (
                    <HorFilmCard key={item.id} imageurl={item.imageurl}></HorFilmCard>
                ))
            }
            if(orient==='verti'){
                return data.map((item, key) => (
                    <VerFilmCard key={item.id} imageurl={item.imageurl} moviename={item.moviename} movierate={item.movierate} moviedate={item.moviedate} movietype={item.movietype}></VerFilmCard> 
                ))
            }
        }

        return(
            <div className='home-container'>
                <HeadBar></HeadBar>
                <div className='home-content'>
                    <FilmList title='Popular' data={DataMapper(PopularListData.resultsHor,'hori')}></FilmList>
                    <h2 className='title'>Now Playing</h2>
                    <div className='grid-container'>
                        {
                            DataMapper(PopularListData.results, 'verti')
                        }
                    </div>
                </div>
            </div>
        )
    }
}