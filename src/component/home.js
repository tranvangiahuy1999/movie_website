import React from 'react';
import '../style/home.css';
import HeadBar from './headbar';
import FilmCard from './filmcard';
import FilmList from './filmlist'

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='home-container'>
                <HeadBar></HeadBar>
                <div className='home-content'>
                    <FilmList title='Popular'></FilmList>
                    <FilmList title='Popular'></FilmList>
                    <FilmCard movieimageurl='https://i.pinimg.com/originals/45/1c/97/451c97801dacffe00eb7314e843ec5e3.jpg' moviename='Captain America: Civil War' movierate='100%' moviedate='Jul 14, 2020' movietype='Action, Adventure, Comedy, Fantasy, Sciene Fiction'></FilmCard>
                </div>
            </div>
        )
    }
}