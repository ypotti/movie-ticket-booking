import React, { useEffect, useState } from "react";
import {
  AiFillCloseSquare,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { getFilmShowTimes, postBooking } from "../services/MovieService";

const BookingPage = ({ setSelectedMovie, selectedMovie }) => {
  const [cinemaList, setCinemaList] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState({});
  const [tickets, setTickets] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const data = getFilmShowTimes().cinemas;
    setCinemaList(data);
    setSelectedCinema(data[0]);
  }, []);

  const incrementTickets = () => {
    setTickets(tickets + 1);
  };

  const decrementTickets = () => {
    setTickets(tickets - 1);
  };

  const reserveTickets = () => {
    postBooking({
      filmId: selectedMovie.filmId,
      filmName: selectedMovie.filmName,
      locationId: selectedCinema.locationId,
      name: selectedCinema.name,
      date: selectedDate,
      ticketsCount: tickets,
      start_time: selectedTime,
    });
  };

  return (
    <div className="BookingPage">
      <div className="BookingPage__Modal">
        <div className="d-flex justify-content-between align-items-center">
          <h1>{selectedMovie.filmName}</h1>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <AiFillCloseSquare onClick={() => setSelectedMovie(null)} />
        </div>
        <div>{/* movies hori slider*/}</div>
        <div className="d-flex flex-row">
          {cinemaList.map((cinema) => (
            <div
              key={cinema.locationId}
              className="m-4 p-2 shadow border"
              onClick={() => setSelectedCinema(cinema)}
            >
              <div>{cinema.name}</div>
              <div>{cinema.address.address1}</div>
              <div>{cinema.address.city}</div>
              <div>{cinema.address.state}</div>
              <div>{cinema.address.postalCode}</div>
            </div>
          ))}
        </div>
        {selectedCinema.times && (
          <div className="d-flex flex-wrap ">
            {selectedCinema.times.map((time) => (
              <div
                key={time.start_time}
                className="border p-3 m-3"
                onClick={() => setSelectedTime(time.start_time)}
              >
                {time.start_time}
              </div>
            ))}
          </div>
        )}
        <div className="m-4">
          <div>Select Tickets:</div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center mr-5 m-3">
              <AiFillPlusCircle
                className="BookingPage_icon"
                onClick={incrementTickets}
              />
              <input type="text" value={tickets} className="form-control" />
              <AiFillMinusCircle
                className="BookingPage_icon"
                onClick={decrementTickets}
              />
            </div>
            <button className="btn btn-danger" onClick={reserveTickets}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
