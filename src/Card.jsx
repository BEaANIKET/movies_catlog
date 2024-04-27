
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Card = ({ movie }) => {
    return (
        <NavLink to={`/movies/${movie.imdbID}`}>
            <div className="card ">
                <img className=' absolute h-full w-full overflow-hidden' src={movie.Poster} alt="" />
            </div>
        </NavLink>

    );
};

export default Card;
