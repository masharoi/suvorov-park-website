const ADDRESS = "http://92.53.67.152";

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
      return response.json();
    })
    .then(json => {
      console.log(json)
      callback(json);
    })
    .catch(error => alert("The error has occured " + error));
}
