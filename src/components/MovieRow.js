import React, { useState } from "react";
import "./index.css";
import { getFilmShowTimes } from "../services/MovieService";

const MovieRow = ({ data }) => {
  const [movieTimes, setMovieTimes] = useState();

  const handleClick = () => {
    getFilmShowTimes(5, data.film_id, "2022-05-15").then((response) => {
      setMovieTimes(response);
    });
  };
  return (
    <div className="d-flex mb-3 p-3 MovieRow">
      <img
        src={data.images.poster[1].medium.film_image}
        alt={data.film_name}
        className="MovieRow__image"
      />
      <h4>{data.film_name}</h4>
      {/* {console.log(movieTimes)} */}
      <button
        className="btn btn-secondary align-self-end"
        onClick={handleClick}
      >
        View Details
      </button>
    </div>
  );
};

export default MovieRow;
