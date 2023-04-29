import { createContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=d7747b50&s=titanic`;

const MovieContext = createContext();

// provider function
const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: "false", message: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
      } else {
        setIsError({ show: "true", message: data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <MovieContext.Provider value={{ isLoading, movies, isError }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
