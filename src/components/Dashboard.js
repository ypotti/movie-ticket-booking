import React, { useEffect, useState } from "react";
import { upcommingFilms } from "../services/MovieService";

const Dashboard = () => {
  const [upcommingFilmsList, setUpcommingFilmsList] = useState([]);

  useEffect(() => {
    setUpcommingFilmsList(upcommingFilms());
  }, []);

  return (
    <div className="Dashboard">
      <h1>Upcomming Movies</h1>
      {upcommingFilmsList.length > 1 && (
        <div className="d-flex Dashboard__MoviesBox col-12 col-md-11">
          {upcommingFilmsList.map((film) => (
            <div key={film.film_id} className="m-3">
              <img
                src={film.images.poster[1].medium.film_image}
                alt={film.film_name}
                className="Dashboard__MovieImage"
              />
              <div className="p-2 fw-bold text-center">{film.film_name}</div>
            </div>
          ))}
        </div>
      )}
      <div>{/* table */}</div>
    </div>
  );
};

export default Dashboard;
