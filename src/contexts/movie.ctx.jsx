import React, { useState, createContext } from 'react';

export const MovieContext = createContext();
export const MovieProvider = (props) => {

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
    },
    {
      id: 110232,
      title: 'Gulliver The Traveller',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus urna, dapibus vel fringilla in, gravida at ex. Vestibulum quis cursus est. Aliquam erat volutpat. Nunc vel luctus metus.',
      year: 2003
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>{ props.children}</MovieContext.Provider>
  )
}