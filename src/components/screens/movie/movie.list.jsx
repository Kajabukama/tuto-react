import React, { useContext } from 'react'
import { MovieContext } from '../../../contexts/movie.ctx';
import Movie from './movie';


const MovieList = () => {

  const [movies, setMovies] = useContext(MovieContext);
  
  return (
    <div className="container mt-5">
      <div className="row">
        { movies.map((movie) => 
          (
            <div className="col-md-4">
              <Movie 
                year={ movie.year }
                title={ movie.title } 
                description={ movie.description }
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default MovieList;