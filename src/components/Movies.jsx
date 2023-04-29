import React, { useContext } from "react";
import { MovieContext } from "../store/context";
import { NavLink } from "react-router-dom";

export const Movies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movies.map((movie) => {
            const { imdbID, Title, Poster } = movie;
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title}</h2>
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