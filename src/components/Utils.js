export const LOGGED_OUT = 403;
export const INTERNAL_SERVER_ERROR = 500;
export const VALIDATION_ERROR = 400;

export default function makeRequest(body, requestType, apiAddress, callback) {
  fetch(apiAddress, {
    method: requestType,
    body: body,
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {return response.json()}

      switch (response.status) {

        case LOGGED_OUT:
          window.localStorage.setItem("isLoggedIn", false);
          throw new Error('Authorization Error');

        case VALIDATION_ERROR:
          return VALIDATION_ERROR;

        case INTERNAL_SERVER_ERROR:
          window.location = "/error"
          throw new Error('Internal Server Error');

        default:
          throw new Error('Something went wrong');
      }
    })
    .then(json => {
      callback(json);
    })
    .catch(error => console.log("The error has occured " + error));
}
