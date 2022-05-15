import React, { useEffect, useState } from "react";
import { getRunningMovies } from "../services/MovieService";
import MovieRow from "./MovieRow";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getRunningMovies(5).then((data) => {
      setMoviesList(data.films);
    });
  }, []);

  return (
    <div className="Movies bg-white">
      {moviesList.map((movie) => (
        <MovieRow key={movie.film_id} data={movie} />
      ))}
    </div>
  );
};

export default Movies;
