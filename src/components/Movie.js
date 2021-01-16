import React from 'react';
import './Movie.css'

const Movies = (props) => {
    return (
        <div className="movie-Container">
           <img src={props.el.Poster}/>
           <h5>{props.el.Title}</h5>
           <small>{props.el.Year}</small>
           {/* <button onClick={props.nominate}>Nominate</button> */}
        </div>
    )
}
export default Movies;