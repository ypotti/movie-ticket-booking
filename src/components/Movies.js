import React from "react";
import { getRunningMovies } from "../services/MovieService";

const Movies = () => {
  return (
    <div>
      Movies
      {console.log(getRunningMovies(10))}
    </div>
  );
};

export default Movies;
