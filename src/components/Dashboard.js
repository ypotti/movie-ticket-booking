import React, { useEffect, useState } from "react";
import { upcommingFilms, getBookings } from "../services/MovieService";
import Loading from "./Loading";

const Dashboard = () => {
  const [upcommingFilmsList, setUpcommingFilmsList] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    upcommingFilms().then((data) => setUpcommingFilmsList(data));
    getBookings().then((data) => setBookings(data));
  }, []);

  return (
    <div className="Dashboard">
      <h1 className="Dashboard__sideHeading mt-3 ms-3">Upcoming Movies</h1>
      {upcommingFilmsList.length > 1 ? (
        <div className="d-flex Dashboard__MoviesBox col-12">
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
      ) : (
        <Loading />
      )}
      <div>
        <h1 className="Dashboard__sideHeading mt-3 ms-3">Bookings</h1>
        {bookings.length == 0 ? (
          <Loading />
        ) : (
          <table className="table table-striped col-12">
            <thead>
              <tr>
                <th>Date</th>
                <th>Film Name</th>
                <th>Cinema Name</th>
                <th>Tickets</th>
                <th>Start Time</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.filmName}</td>
                  <td>{booking.name}</td>
                  <td>{booking.ticketsCount}</td>
                  <td>{booking.start_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
