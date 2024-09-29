import React from 'react'
import Movie from './Movie';
import moviesData from '../data/moviesData';

function ListMovie() {
  const movies = moviesData.map((movie) => {
    return <Movie
      key={movie.imdbID}
      Title={movie.Title}
      Plot={movie.Plot}
      Released={movie.Released}
      Poster={movie.Poster}
    />
  });

  return (
    <div className='row p-4'>
      {movies}
    </div>
  )
}

export default ListMovie