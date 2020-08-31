import React from 'react';

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
                <text className='head-text'>SEARCH</text>
            </div>
        )
    }
}