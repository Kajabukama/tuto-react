import React from 'react';
import './App.css';
import MovieList from './components/movie/movie.list'
import Navbar from './components/shared/navbar/navbar';

function App() {
  
  return (
    <>
      <Navbar/>
      <MovieList/>
    </>
  );
}

export default App;
