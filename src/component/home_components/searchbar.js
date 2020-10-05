import React from 'react';
import { FaSearch } from "react-icons/fa";

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchkey:'',
        }
    }

    render(){
        return(
            <div className='search-bar-area'>
                <input className='search-filter' type='text' onChange={(e)=>this.setState({searchkey:e.target.value})} placeholder='Find some movies?'></input>
                <div className='search-button'>  
                    <FaSearch color='rgb(122, 120, 116)' size={16} style={{marginLeft:'10px'}}></FaSearch>
                    <text className='head-text'>SEARCH</text>
                </div>
            </div>
        )
    }
}