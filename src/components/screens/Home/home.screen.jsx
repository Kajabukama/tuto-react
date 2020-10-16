import React, { useContext } from 'react'
import { MovieContext } from '../../../contexts/movie.ctx';

const HomeScreen = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="wrapper">
      <div className="home_page__title">
        <h2>Home Page</h2>
        <h3>There are { movies.length } in this Category</h3>
        <h6 className="mt-3">Ut et sodales nisi, sed elementum lorem. Aliquam gravida nunc eget diam vestibulum, at viverra orci mattis. Proin sagittis turpis ut finibus rhoncus. Nam vitae elit vitae erat pellentesque tristique.</h6>
      </div>
    </div>
  )
}

export default HomeScreen;
