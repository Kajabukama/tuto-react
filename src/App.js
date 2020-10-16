import React from 'react';
import './Application.css';
import { Switch, Route } from 'react-router-dom';
import MovieList from './components/screens/movie/movie.list'
import Navbar from './components/shared/navbar/navbar';
import HomeScreen from './components/screens/Home/home.screen';
import { MovieProvider } from './contexts/movie.ctx'
function App() {
  
  return (
    <MovieProvider>
      <div>
        <Navbar/>
        <br/>
        <Switch>
          <Route path="/" component={ HomeScreen } exact />
          <Route path="/movies-list" component={ MovieList }/>
        </Switch>
      </div>
    </MovieProvider>
  );
}

export default App;
