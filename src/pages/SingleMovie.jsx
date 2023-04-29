import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleMovie = () => {
  const { id } = useParams();

  const { isLoading, movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <div className="movie-section">
        <p className="loading">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt={movie.Title} />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
