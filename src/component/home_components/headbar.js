import React from 'react';
import SearchBar from './searchbar';

export default class HeadBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchfilter:'',
        }
    }
    render(){
        return(
            <div className='head-container'>
                <div className='head-content-left'>
                    <img className='head-logo' src={require('../../resources/img/background/netflix-logo.png')} />
                    <a className='large-text'>Movies</a>                 
                    <a className='large-text'>TV Show</a>                   
                    <a className='large-text'>Actor</a> 
                </div>
                <div className='head-content-right'>
                    <SearchBar></SearchBar>
                </div>
            </div>
        )
    }
}