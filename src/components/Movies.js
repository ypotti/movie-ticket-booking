import React, { useEffect, useState } from "react";
import { getRunningMovies } from "../services/MovieService";
import MovieRow from "./MovieRow";
import Filters from "./Filters";
import { filterItems } from "../constants";
import noConnection from "../assets/no-connection.png";
import BookingPage from "./BookingPage";

const Movies = () => {
  const [allMoviesList, setAllMoviesList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filters, setFilters] = useState({
    language: "all",
    location: "all",
    genre: "all",
    sortBy: "none",
  });

  useEffect(() => {
    const { language, genre, location, sortBy } = filters;
    let currentList = [...allMoviesList];
    if (language !== "all") {
      currentList = currentList.filter((movie) => movie.language === language);
    }
    if (genre !== "all") {
      currentList = currentList.filter((movie) => movie.Genre === genre);
    }
    if (location !== "all") {
      currentList = currentList.filter((movie) =>
        movie.locations.includes(location)
      );
    }
    if (sortBy === "name") {
      currentList = currentList.sort((a, b) =>
        a.filmName > b.filmName ? 1 : -1
      );
    }
    if (sortBy === "language") {
      currentList = currentList.sort((a, b) =>
        a.language > b.language ? 1 : -1
      );
    }
    setMoviesList(currentList);
  }, [filters]);

  useEffect(() => {
    getRunningMovies().then((data) => {
      setAllMoviesList(data);
      setMoviesList(data);
      setFilters(filters);
    });
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
              <option value="none" disabled>
                None
              </option>
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
                <MovieRow
                  key={movie.filmId}
                  data={movie}
                  setSelectedMovie={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedMovie && (
        <BookingPage
          filters={filters}
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      )}
    </div>
  );
};

export default Movies;
