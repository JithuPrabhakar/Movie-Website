import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const MovieContext = createContext();

// provider function
const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");

  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <MovieContext.Provider
      value={{ isLoading, movie, isError, query, setQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
