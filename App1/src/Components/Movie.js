import React from "react";
import "./Movie.css"
const ImageURL = 'https://image.tmdb.org/t/p/w500/';

function Movie({poster_path,title,overview, vote_average})
{
    return (
        <div className="movie">
            <img src={ImageURL + poster_path} alt={title}></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;