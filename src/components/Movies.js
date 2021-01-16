import React from 'react';

const Movies = (props) => {
    return (
        <div>
           <img src={props.el.Poster}/>
           <h5>{props.el.Title}</h5>
           <small>{props.el.Year}</small>
        </div>
    )
}
export default Movies;