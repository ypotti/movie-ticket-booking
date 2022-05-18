// Get All Running Movies
export const getRunningMovies = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/runningMovies";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Get Show Times => pending
export const getFilmShowTimes = () => {
  return {
    date: "2022-05-16",
    //   cinema length = n
    cinemas: [
      {
        locationId: 201,
        name: "Cinema-1",
        address: {
          address1: "1745 T Street Southeast",
          address2: "",
          city: "Washington",
          state: "DC",
          postalCode: "20020",
        },
        times: [
          {
            start_time: "11:20",
            end_time: "13:34",
          },
          {
            start_time: "12:00",
            end_time: "14:14",
          },
          {
            start_time: "12:40",
            end_time: "14:54",
          },
          {
            start_time: "13:30",
            end_time: "15:44",
          },
          {
            start_time: "14:10",
            end_time: "16:24",
          },
          {
            start_time: "14:50",
            end_time: "17:04",
          },
          {
            start_time: "15:30",
            end_time: "17:44",
          },
          {
            start_time: "16:20",
            end_time: "18:34",
          },
          {
            start_time: "17:00",
            end_time: "19:14",
          },
          {
            start_time: "17:30",
            end_time: "19:44",
          },
          {
            start_time: "17:40",
            end_time: "19:54",
          },
          {
            start_time: "18:20",
            end_time: "20:34",
          },
          {
            start_time: "18:45",
            end_time: "20:59",
          },
          {
            start_time: "19:10",
            end_time: "21:24",
          },
          {
            start_time: "19:50",
            end_time: "22:04",
          },
          {
            start_time: "20:00",
            end_time: "22:14",
          },
          {
            start_time: "20:30",
            end_time: "22:44",
          },
          {
            start_time: "21:10",
            end_time: "23:24",
          },
          {
            start_time: "21:15",
            end_time: "23:29",
          },
        ],
      },
      {
        locationId: 202,
        name: "Cinema-2",
        address: {
          address1: "6007 Applegate Lane",
          address2: "",
          city: "Louisville",
          state: "KY",
          postalCode: "40219",
        },
        times: [
          {
            start_time: "10:30",
            end_time: "12:44",
          },
          {
            start_time: "12:00",
            end_time: "14:14",
          },
          {
            start_time: "12:30",
            end_time: "14:44",
          },
          {
            start_time: "13:00",
            end_time: "15:14",
          },
          {
            start_time: "14:30",
            end_time: "16:44",
          },
          {
            start_time: "15:00",
            end_time: "17:14",
          },
          {
            start_time: "15:30",
            end_time: "17:44",
          },
          {
            start_time: "17:00",
            end_time: "19:14",
          },
          {
            start_time: "17:30",
            end_time: "19:44",
          },
          {
            start_time: "18:00",
            end_time: "20:14",
          },
          {
            start_time: "19:30",
            end_time: "21:44",
          },
          {
            start_time: "20:00",
            end_time: "22:14",
          },
          {
            start_time: "20:30",
            end_time: "22:44",
          },
        ],
      },
      {
        locationId: 205,
        name: "Cinema-5",
        address: {
          address1: "1513 Cathy Street",
          address2: "",
          city: "Savannah",
          state: "GA",
          postalCode: "31415",
        },
        times: [
          {
            start_time: "10:50",
            end_time: "13:04",
          },
          {
            start_time: "12:50",
            end_time: "15:04",
          },
          {
            start_time: "13:45",
            end_time: "15:59",
          },
          {
            start_time: "14:00",
            end_time: "16:14",
          },
          {
            start_time: "14:35",
            end_time: "16:49",
          },
          {
            start_time: "15:10",
            end_time: "17:24",
          },
          {
            start_time: "15:55",
            end_time: "18:09",
          },
          {
            start_time: "16:25",
            end_time: "18:39",
          },
          {
            start_time: "17:05",
            end_time: "19:19",
          },
          {
            start_time: "18:35",
            end_time: "20:49",
          },
          {
            start_time: "19:20",
            end_time: "21:34",
          },
          {
            start_time: "19:55",
            end_time: "22:09",
          },
          {
            start_time: "21:15",
            end_time: "23:29",
          },
          {
            start_time: "22:15",
            end_time: "00:29",
          },
          {
            start_time: "23:15",
            end_time: "01:29",
          },
        ],
      },
    ],
  };
};

// Get Languages
export const getLanguages = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/languages";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Get Locations
export const getLocations = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/locations";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Get Genres
export const getGenres = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/genres";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// Post Booking - reserve tickets
export const postBooking = async (data) => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/registerBooking";
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

// Get Upcomming Movies
export const upcommingFilms = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/upcommingfilms";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

// get Bookings
export const getBookings = async () => {
  const URL = "https://movie-ticket-booking-api.herokuapp.com/bookings";
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
