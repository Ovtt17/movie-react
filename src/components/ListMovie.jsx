import React from 'react'
import Movie from './Movie';
import moviesData from '../data/moviesData';

function ListMovie() {
  const movies = moviesData.map((movie) => {
    return <Movie
      key={movie.imdbID}
      title={movie.Title}
      description={movie.Plot}
      dateOfPublished={movie.Released}
      image={movie.Poster}
    />
  });

  return (
    <div className='row'>
      {movies}
    </div>
  )
}

export default ListMovie