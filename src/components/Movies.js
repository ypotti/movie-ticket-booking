import React, { useEffect, useState } from "react";
import { getRunningMovies } from "../services/MovieService";
import MovieRow from "./MovieRow";
import Filters from "./Filters";
import { filterItems } from "../constants";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState({
    language: "all",
    location: "all",
    genre: "all",
    sortBy: "name",
  });

  useEffect(() => {
    getRunningMovies(5).then((data) => {
      setMoviesList(data.films);
    });
  }, []);

  return (
    <div className="Movies bg-white d-flex flex-column align-items-center">
      <form className="Movies__filters pe-3 pb-3">
        {filterItems.map((item) => (
          <Filters
            item={item}
            key={item.id}
            filters={filters}
            setFilters={setFilters}
          />
        ))}
      </form>
      <div className="Movies__container bg-white">
        <div className="Movies__containerheader d-flex align-items-center p-3">
          <div>Below are the search results</div>
          <div className="ms-auto me-3 fw-bold">Sort by:</div>
          <div>
            <select
              className="form-control"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
            >
              <option value="name">Name</option>
              <option value="language">Language</option>
            </select>
          </div>
        </div>
        {moviesList.map((movie) => (
          <MovieRow key={movie.film_id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
