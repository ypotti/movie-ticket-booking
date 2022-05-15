import React, { useEffect, useState } from "react";
import { getRunningMovies } from "../services/MovieService";
import MovieRow from "./MovieRow";
import { IoLanguageOutline, IoLocationOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    location: "",
    genre: "",
    sortBy: "",
  });

  useEffect(() => {
    getRunningMovies(5).then((data) => {
      setMoviesList(data.films);
    });
  }, []);

  return (
    <div className="Movies bg-white d-flex flex-column align-items-center">
      {console.log(filters)}
      <div className="Movies__filters pe-3 pb-3">
        <div>
          <label>Language</label>
          <div>
            <IoLanguageOutline />
            <select
              onChange={(e) =>
                setFilters({ ...filters, language: e.target.value })
              }
            >
              <option selected value="all">
                --All--
              </option>
              <option value="english">English</option>
              <option value="telugu">Telugu</option>
              <option value="spanish">spanish</option>
            </select>
          </div>
        </div>
        <div>
          <label>Location</label>
          <div>
            <IoLocationOutline />
            <select
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option selected value="all">
                --All--
              </option>
              <option value="cinema-1">Cinema-1</option>
              <option value="cinema-5">Cinema-5</option>
              <option value="cinema-4">Cinema-4</option>
            </select>
          </div>
        </div>
        <div>
          <label>Genre</label>
          <div>
            <MdLocalMovies />
            <select
              onChange={(e) =>
                setFilters({ ...filters, genre: e.target.value })
              }
            >
              <option selected value="all">
                --All--
              </option>
              <option value="horror">Horror</option>
              <option value="thriller">Thriller</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Movies__container bg-white">
        <div className="Movies__containerheader d-flex align-items-center p-3">
          <div>Below are the search results</div>
          <div className="ms-auto me-3 fw-bold">Sort by:</div>
          <div>
            <select
              className="form-control"
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
            >
              <option value="language">Language</option>
              <option value="name">Name</option>
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
