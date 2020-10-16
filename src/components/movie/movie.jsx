import React from 'react'

const  Movie = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ props.title }</h5>
        <h6 class="card-subtitle mb-2 text-muted">Year of Release : { props.year }</h6>
        <div className="card-text">{ props.description }</div>
      </div>
    </div>
  )
}

export default Movie;
