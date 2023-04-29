import { createContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MovieContext = createContext();

// provider function
const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: "false", message: "" });
  const [query, setQuery] = useState("titanic");

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
    const timer = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <MovieContext.Provider
      value={{ isLoading, movies, isError, query, setQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
