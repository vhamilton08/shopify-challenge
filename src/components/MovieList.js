import React from 'react';
import Movie from './Movie';
import './MovieList.css';

const Movies = (props) => {

    let mappedMovie = props.movie.map((el, index) => {
        return <Movie key={index} el={el} nominate={props.nominate}/>
    })
    
    const splicedMovie = mappedMovie.splice(0, mappedMovie.length - 5)
    return (
        <div className="movie-List-Container">
            {splicedMovie}
        </div>
    )
}
export default Movies;