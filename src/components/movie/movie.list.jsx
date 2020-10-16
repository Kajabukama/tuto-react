import React, { useState } from 'react'
import Movie from './movie';
const MovieList = () => {

  const [movies, setMovies] = useState([
    {
      id: 12009,
      title: 'Example Movie',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus urna, dapibus vel fringilla in, gravida at ex. Vestibulum quis cursus est. Aliquam erat volutpat. Nunc vel luctus metus.',
      year: 2020
    },
    {
      id: 110002,
      title: 'Harry Potter',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus urna, dapibus vel fringilla in, gravida at ex. Vestibulum quis cursus est. Aliquam erat volutpat. Nunc vel luctus metus.',
      year: 2009
    }
  ]);
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