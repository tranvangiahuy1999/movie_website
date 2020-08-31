import React from 'react';
import '../style/home.css';
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
                    <div>
                        <img className='head-logo' src={require('../resources/img/background/netflix-logo.png')} />
                    </div>
                    <div>
                        <a className='head-text'>Movies</a>
                    </div>
                    <div>
                        <a className='head-text'>TV Show</a>
                    </div>
                    <div>
                        <a className='head-text'>Actor</a>
                    </div>  
                </div>
                <div className='head-content-right'>
                    <SearchBar></SearchBar>
                </div>
            </div>
        )
    }
}