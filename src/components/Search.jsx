import React, { useContext } from "react";
import { MovieContext } from "../store/context";

const Search = () => {
  const { query, setQuery, isError } = useContext(MovieContext);

  return (
    <>
      <section className="search-section">
        <h3>Search Your Favourite Movies</h3>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          {isError.show && <p>{isError.message}</p>}
        </div>
      </section>
    </>
  );
};

export default Search;
