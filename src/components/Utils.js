export const LOGGED_OUT = 403;
export const INTERNAL_SERVER_ERROR = 500;

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
      //alert(response.status)
      if (response.ok) {
        return response.json();
      } else if (response.status == 403) {
        window.localStorage.setItem("isLoggedIn", false);
        throw new Error('Authorization Error');
      } else if (response.status == 500) {
        window.location = "/error"
        throw new Error('Internal Server Error');
      } else {
        console.log(response.json())
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json)
      callback(json);
    })
    .catch(error => console.log("The error has occured " + error));
}
