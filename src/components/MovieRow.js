import React, { useState } from "react";
import "./index.css";

const MovieRow = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="d-flex align-items-center  p-3 MovieRow">
      <img
        src={data.filmImage}
        alt={data.filmName}
        className="MovieRow__image"
      />
      <div className="w-50 align-self-start">
        <h4>{data.filmName}</h4>
        <div>Age-Rating: {data.ageRating}</div>
        <div>Language: {data.language}</div>
        <div>Genre: {data.Genre}</div>
        <div>Locations: {data.locations}</div>
        <div>
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
        <div>
          {`Directors: `}
          {data.directors.map((person) => (
            <span key={person.director_id}>{`${person.director_name}, `} </span>
          ))}
        </div>
      </div>
      <div className=" ms-auto align-self-end">
        {data.filmTrailer && <a href={data.filmTrailer}>Watch Trailer</a>}
        <button className="ms-2 btn btn-secondary">View Details</button>
      </div>
    </div>
  );
};

export default MovieRow;
