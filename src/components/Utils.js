export const LOGGED_OUT = 403;

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
      if (response.ok) {
        return response.json();
      } else if (response.status == 403) {
        return LOGGED_OUT;
      } else {
        console.log(response.json())
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json)
      callback(json);
    })
    .catch(error => alert("The error has occured " + error));
}
