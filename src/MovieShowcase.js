import React, { Component } from 'react';
import CardBack from './card-components/CardBack.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(({title, IMDBRating, genres, poster}) => {
      return < MovieCard title={title} IMDBRating={IMDBRating} genres={genres} poster={poster}/>
    })

    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
