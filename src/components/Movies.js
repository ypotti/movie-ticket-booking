import React, { useEffect, useState } from "react";
import { getRunningMovies } from "../services/MovieService";
import MovieRow from "./MovieRow";
import Filters from "./Filters";
import { filterItems } from "../constants";
import noConnection from "../assets/no-connection.png";

const Movies = () => {
  const [allMoviesList, setAllMoviesList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState({
    language: "all",
    location: "all",
    genre: "all",
    sortBy: "name",
  });

  useEffect(() => {
    const { language, genre, sortBy } = filters;
    if (language !== "all" && genre !== "all") {
      setMoviesList(
        allMoviesList.filter((movie) => {
          return movie.language === language && movie.Genre === genre;
        })
      );
    } else if (language === "all" && genre === "all") {
      setMoviesList(allMoviesList);
    } else if (language !== "all") {
      setMoviesList(
        allMoviesList.filter((movie) => movie.language === language)
      );
    } else if (genre !== "all") {
      setMoviesList(allMoviesList.filter((movie) => movie.Genre === genre));
    }
  }, [filters]);

  useEffect(() => {
    const data = getRunningMovies();
    setAllMoviesList(data);
    setMoviesList(data);
    setFilters(filters);
  }, []);

  return (
    <div className="Movies bg-white d-flex flex-column align-items-center mb-5">
      <form className="Movies__filters pe-3 pb-3">
        {filterItems.map((item) => (
          <Filters
            item={item}
            key={item.id}
            filters={filters}
            setFilters={setFilters}
            allMoviesList={allMoviesList}
            setMoviesList={setMoviesList}
          />
        ))}
      </form>
      <div className="Movies__container bg-white">
        <div className="Movies__containerheader d-flex align-items-center p-3">
          <div className="fw-bold">Search Results</div>
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
        <div>
          {moviesList.length === 0 ? (
            <div className="d-flex align-items-center flex-column p-5">
              <img
                src={noConnection}
                className="Movies__noResults mb-3"
                alt="no-Connection"
              />
              <div className="fw-bold">No Results Found</div>
            </div>
          ) : (
            <div>
              {moviesList.map((movie) => (
                <MovieRow key={movie.filmId} data={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
