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
export const getFilmShowTimes = async (film_id,date) => {
  const URL = `https://movie-ticket-booking-api.herokuapp.com/filmShowTimes?film_id=${film_id}&date=${date}`;
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
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
