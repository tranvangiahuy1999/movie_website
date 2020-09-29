import React from 'react';

export default class HorFilmCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

   render() {
     return (
       <div style={{flex:1}}>
          <img className='horizontal-movie-image' src={this.props.imageurl}></img>
       </div>
     );
   }
}