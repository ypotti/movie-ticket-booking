import React, { useState } from "react";
import "./index.css";
import { BiCameraMovie } from "react-icons/bi";
import Trailer from "./Trailer";

const MovieRow = ({ data, setSelectedMovie }) => {
  const [showMore, setShowMore] = useState(false);
  const [trailerURL, setTrailerURL] = useState(false);

  return (
    <div className="d-flex align-items-center  p-3 MovieRow">
      <img
        src={data.filmImage}
        alt={data.filmName}
        className="MovieRow__image"
      />
      <div className="w-50 align-self-stretch d-flex flex-column">
        <h4>
          {data.filmName}{" "}
          {data.filmTrailer && (
            <div
              className="MovieRow__trailer mt-2"
              onClick={() => setTrailerURL(data.filmTrailer)}
            >
              <BiCameraMovie className="trailer__icon" />
              <a className="me-3 trailer-text">Watch Trailer</a>
              {trailerURL && (
                <Trailer
                  trailerURL={trailerURL}
                  setTrailerURL={setTrailerURL}
                />
              )}
            </div>
          )}
        </h4>
        <div>Age-Rating: {data.ageRating}</div>
        <div>Language: {data.language}</div>
        <div>Genre: {data.Genre}</div>
        <div>Locations: {data.locations}</div>
        <div className="d-none d-md-block">
          {`Cast: `}
          {data.cast.map((person, index) => {
            if (showMore) {
              return (
                <span key={person.cast_id}>{`${person.cast_name}, `}</span>
              );
            } else if (index < 4) {
              return (
                <span key={person.cast_id}>{`${person.cast_name}, `}</span>
              );
            } else {
              return "";
            }
          })}
          {showMore ? (
            <span className="show__text" onClick={() => setShowMore(false)}>
              Show Less...
            </span>
          ) : (
            <span className="show__text" onClick={() => setShowMore(true)}>
              Show More...
            </span>
          )}
        </div>
        <div className="d-none d-md-block">
          {`Directors: `}
          {data.directors.map((person) => (
            <span key={person.director_id}>{`${person.director_name}, `} </span>
          ))}
        </div>
        <div className="d-md-none mt-auto mb-3">
          <button
            className=" btn btn-secondary"
            onClick={() => setSelectedMovie(data)}
          >
            View Details
          </button>
        </div>
      </div>
      <div className="d-none d-md-block ms-auto align-self-end">
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedMovie(data)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
