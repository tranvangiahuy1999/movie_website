import React from 'react';
import HeadBar from './headbar';
import VerFilmCard from '../filmcard_components/verticalfilmcard';
import {image_base_url,base_url, genres_movie_route, now_playing_route, popular_route, top_rated_route, upcoming_route, bearer_token} from '../../routes/index';

// import FilmList from '../filmcard_components/filmlist';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: 'Popular',
            data: null,
            genres_data:null,
        }
        this.DataMapper = this.DataMapper.bind(this);
        this.Fetches = this.Fetches.bind(this);
        this.GenresLister = this.GenresLister.bind(this);
    }

    componentDidMount(){
        this.Fetches(this.state.title);
        this.Fetches('Genres');
    }

    async onClick(key){
        await this.Fetches(key);
        if(this.state.data !== null && this.state.data !== undefined){
            this.setState({title: key});
        }
    }

    Fetches = (key) => {
        let router = null;
        if(key === 'Now Playing'){
            router = base_url + now_playing_route;
        } else if(key === 'Popular'){
            router = base_url + popular_route;
        } else if(key === 'Top Rated'){
            router = base_url + top_rated_route;
        } else if(key === 'Upcoming'){
            router = base_url + upcoming_route;
        } else if(key === 'Genres'){
            router = base_url + genres_movie_route;
        }
        
        try{
            if(router!== null){
            fetch(router, {
                method: 'GET', 
                    headers:{ 
                        'Content-Type':'application/json;charset=utf-8',
                        'Authorization': 'Bearer ' + bearer_token,
                    },
            })
            .then(response=> response.json())
            .then(data=>{
                if(key === 'Genres'){
                    this.setState({genres_data:data});
                    console.log(this.state.genres_data);
                } else {
                    this.setState({data:data});
                }
            })
        }
        } catch (e){
            console.log(e);
        }
    }
    
    DataMapper = (data) => {
        if(this.state.data !== null && this.state.data !== undefined){
            return this.state.data.results.map((item, key) => (
                <VerFilmCard key={item.id} imageurl={image_base_url + item.poster_path} moviename={item.title} movierate={item.vote_average} moviedate={item.release_date} moviegenre={this.GenresLister(item.genre_ids)}></VerFilmCard>
            ))
        }
    }

    GenresLister(data){
        let genres_temp = '';
        data.forEach((itemgenres, index) => {
            if(this.state.genres_data !== null && this.state.genres_data !== undefined){
                this.state.genres_data.genres.forEach((genre, index1)=>{
                    if(itemgenres===genre.id){
                        genres_temp = genres_temp + genre.name + ', ';
                    }
                })
            }
        })
        return genres_temp;
    }

    render(){
        return(
            <div className='home-container'>
                <HeadBar link ={
                    <div>
                        <a href='#' onClick={()=>this.onClick('Popular')} className='large-text'>Popular</a>
                        <a href='#' onClick={()=>this.onClick('Now Playing')} className='large-text'>Now Playing</a>
                        <a href='#' onClick={()=>this.onClick('Upcoming')} className='large-text'>Upcoming</a>

                    </div>
                }></HeadBar>
                <div className='home-content'>
                    <h2 className='title'>{this.state.title}</h2>
                    <div className='grid-container'>
                        {
                            this.DataMapper(this.state.data)
                        }
                    </div>
                </div>
            </div>
        )
    }
}