import React from 'react';

export default class HorFilmCard extends React.Component {

   render() {
     return (
       <div style={{flex:1}}>
          <img alt={this.props.imagename} className='horizontal-movie-image' src={this.props.imageurl}></img>
       </div>
     );
   }
}