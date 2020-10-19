import React from 'react';
import HeadBar from './headbar';
import HorFilmCard from '../filmcard_components/horizontalfilmcard';
import VerFilmCard from '../filmcard_components/verticalfilmcard';
import PopularListData from '../../data/data';
import FilmList from '../filmcard_components/filmlist';

const popular_url = 'https://api.themoviedb.org/3/movie/popular';
const image_url = 'http://image.tmdb.org/t/p/w500//';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: null,
            bearer_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODVhYmZkNjU0MGQyYzYyOWY3ODhmNzVkZGMyODNjNyIsInN1YiI6IjVmOGQxNjJjZDA1YTAzMDAzNmRlMjJmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o3Fpxlepl1NBeq1kuX30CQo_AK2tHUFOvoX_h0EGBEM',
        }
    }

    componentDidMount(){
        try{
            fetch(popular_url, {
                method: 'GET', 
                    headers:{ 
                        'Content-Type':'application/json;charset=utf-8',
                        'Authorization': 'Bearer ' + this.state.bearer_token,
                    },
            })
            .then(response=> response.json())
            .then(data=>{
                console.log(data);
                if(data !== null){
                    this.setState({data: data});
                } 
            })
        } catch (e){
            console.log(e);
        }
    }

    render(){

        const DataMapper = (data) => {
            // if(orient==='hori'){
            //     return data.map((item, key) => (
            //         <HorFilmCard key={item.id} imageurl={item.imageurl}></HorFilmCard>
            //     ))
            // }

            if(this.state.data !== null){
                return this.state.data.results.map((item, key) => (
                    <VerFilmCard key={item.id} imageurl={image_url + item.poster_path} moviename={item.title} movierate={item.vote_average} moviedate={item.release_date} moviegenre={item.genre_ids}></VerFilmCard>
                ))
        }
    }

        return(
            <div className='home-container'>
                <HeadBar></HeadBar>
                <div className='home-content'>
                    {/* <FilmList title='Popular' data={DataMapper(PopularListData.resultsHor,'hori')}></FilmList> */}
                    <h2 className='title'>Now Playing</h2>
                    <div className='grid-container'>
                        {
                            DataMapper(this.state.data)
                        }
                    </div>
                </div>
            </div>
        )
    }
}