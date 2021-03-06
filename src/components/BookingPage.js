import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import Swal from "sweetalert2";
import { getFilmShowTimes, postBooking } from "../services/MovieService";
import Loading from "./Loading";

const BookingPage = ({ setSelectedMovie, selectedMovie }) => {
  const [cinemaList, setCinemaList] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState({});
  const [tickets, setTickets] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    changeDateFormat(new Date())
  );
  const [showError, setShowError] = useState(false);

  function changeDateFormat(now) {
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    return now.getFullYear() + "-" + month + "-" + day;
  }

  useEffect(() => {
    getFilmShowTimes(selectedMovie.filmId, selectedDate).then((data) => {
      setCinemaList(data.cinemas);
      setSelectedCinema(data.cinemas[0]);
    });
  }, [selectedDate]);

  const incrementTickets = () => {
    setTickets(tickets + 1);
  };

  const decrementTickets = () => {
    if (tickets - 1 >= 0) {
      setTickets(tickets - 1);
    }
  };

  const runValidation = () => {
    if (tickets > 0 && selectedTime) {
      setShowError(false);
      return true;
    } else {
      setShowError(true);
    }
  };

  const fireAlert = (result) => {
    let icon, title;
    if (result === "success") {
      icon = "success";
      title = "Tickets Booked SuccessFully";
    } else {
      title = "Booking Failed. Try again.!";
      icon = "error";
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  const reserveTickets = () => {
    if (runValidation()) {
      postBooking({
        filmId: selectedMovie.filmId,
        filmName: selectedMovie.filmName,
        locationId: selectedCinema.locationId,
        name: selectedCinema.name,
        date: selectedDate,
        ticketsCount: tickets,
        start_time: selectedTime,
      })
        .then((res) => {
          if (res.status === 200) {
            fireAlert("success");
            setSelectedMovie(null);
          }
        })
        .catch((e) => {
          console.log(e);
          fireAlert("failure");
        });
    }
  };
  console.log(selectedDate);

  return (
    <div className="BookingPage">
      <div className="BookingPage__Modal">
        <div className="d-flex justify-content-between align-items-center BookingPage__header ">
          <h1 className="BookingPage__heading text-uppercase">
            <span className="text-capitalize d-none d-md-inline">Movie :</span>
            {`  ${selectedMovie.filmName}`}
          </h1>
          <div className="BookingPage__close">
            <AiOutlineClose
              className="BookingPage__closeIcon"
              onClick={() => setSelectedMovie(null)}
            />
          </div>
        </div>
        {cinemaList.length === 0 ? (
          <Loading />
        ) : (
          <div className="BookingPage__box ps-4 pe-4 pb-4">
            <div className="m-3 d-flex align-items-center col-md-4">
              <label className="sub_heading me-3">Date:</label>
              <DatePicker
                minDate={new Date()}
                value={selectedDate}
                className="form-control text-center date__selector me-3"
                onChange={(e) => {
                  setCinemaList([]);
                  setSelectedDate(changeDateFormat(e));
                }}
              />
            </div>
            <div className="ms-3 sub_heading mt-3">Locations</div>
            <div className="d-flex flex-row cinema__Box">
              {cinemaList.map((cinema) => (
                <div
                  key={cinema.locationId}
                  className={`${
                    selectedCinema.name === cinema.name ? "selected-box" : ""
                  } me-4 ms-4 mb-3 mt-2 p-2 cinema__address`}
                  onClick={() => {
                    setSelectedCinema(cinema);
                    setSelectedTime("");
                  }}
                >
                  <div>{cinema.name}</div>
                  <div>{cinema.address.address1}</div>
                  <div>{cinema.address.city}</div>
                  <div>{cinema.address.state}</div>
                  <div>{cinema.address.postalCode}</div>
                </div>
              ))}
            </div>
            <div className="ms-3 mt-3 sub_heading">Timings</div>
            {selectedCinema.times && (
              <div className="d-flex flex-wrap p-3 w-100">
                {selectedCinema.times.map((time) => (
                  <div
                    key={time.start_time}
                    className={`${
                      time.start_time === selectedTime ? "selected-box" : ""
                    }  time__box`}
                    onClick={() => setSelectedTime(time.start_time)}
                  >
                    {time.start_time}
                  </div>
                ))}
              </div>
            )}
            <div>
              <div className="ms-3 mt-3 sub_heading">Tickets:</div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-5 m-3">
                  <AiFillMinusCircle
                    className="BookingPage_icon"
                    onClick={decrementTickets}
                  />
                  <input
                    type="text"
                    value={tickets}
                    className="form-control Tickets__input"
                    onChange={(e) => setTickets(e.target.value)}
                  />

                  <AiFillPlusCircle
                    className="BookingPage_icon"
                    onClick={incrementTickets}
                  />
                </div>
                <button className="btn btn-danger" onClick={reserveTickets}>
                  Book Now
                </button>
              </div>
              {showError && (
                <div className="text-danger p-2 ms-3 error">
                  Please select All Fields
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
