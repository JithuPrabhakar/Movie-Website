import React, { useContext } from "react";
import { MovieContext } from "../store/context";
import { NavLink } from "react-router-dom";

export const Movies = () => {
  const { movie, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return (
      <div className="movie-section">
        <p className="loading">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((movie) => {
            const { imdbID, Title, Poster } = movie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    {movieName.length >= 15 ? (
                      <h2>{movieName}...</h2>
                    ) : (
                      <h2>{movieName}</h2>
                    )}
                    <img src={Poster} alt={Title} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};
