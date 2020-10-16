import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="#">Using ContextName API</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies-list">Movie List</Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-md-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/movies-list">Total Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies-list">Signed as kajabukama@gmail.com</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
