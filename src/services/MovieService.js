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
      mode: "no-cors",
      headers: headers,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
