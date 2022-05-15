const headers = {
  "api-version": "v200",
  Authorization: "Basic TVlNT19YWDpYdkF2bk4xR1ZycHk=",
  client: "MYMO",
  "x-api-key": "1n3OGpufDbarhhyRFunG42G1wXPOdMEQa3hyZNsX",
  "device-datetime": "2022-05-14T12:41:20.177Z",
  territory: "XX",
};

// Get All Running Movies
export const getRunningMovies = async (n) => {
  const URL = `https://api-gate2.movieglu.com/filmsNowShowing/?n=${n}`;
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Get Show Times
export const getFilmShowTimes = async (n, id, date) => {
  const URL = `https://api-gate2.movieglu.com/filmShowTimes/?n=${n}&film_id=${id}&date=${date}`;
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Get Languages
export const getLanguages = () => {
  return [
    {
      langugageId: 1001,
      name: "English",
    },
    {
      langugageId: 1002,
      name: "Spanish",
    },
    {
      langugageId: 1003,
      name: "French",
    },
    {
      langugageId: 1004,
      name: "Portuguese",
    },
    {
      langugageId: 1005,
      name: "Dutch",
    },
  ];
};

// Get Locations
export const getLocations = () => {
  return [
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
    },
    {
      locationId: 203,
      name: "Cinema-3",
      address: {
        address1: "2203 7th Street Road",
        address2: "",
        city: "Louisville",
        state: "KY",
        postalCode: "40208",
      },
    },
    {
      locationId: 204,
      name: "Cinema-4",
      address: {
        address1: "314 South 17th Street",
        address2: "",
        city: "Nashville",
        state: "TN",
        postalCode: "37206",
      },
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
    },
    {
      locationId: 206,
      name: "Cinema-6",
      address: {
        address1: "1267 Martin Street",
        address2: "#203",
        city: "Nashville",
        state: "TN",
        postalCode: "37203",
      },
    },
  ];
};

// Get Genres
export const getGenres = () => {
  return [
    {
      genreId: 101,
      name: "Action",
    },
    {
      genreId: 102,
      name: "Comedy",
    },
    {
      genreId: 103,
      name: "Horror",
    },
    {
      genreId: 104,
      name: "Mystery",
    },
  ];
};
