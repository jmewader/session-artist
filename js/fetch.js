const request = "https://jsonplaceholder.typicode.com/comments";

function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(url, { method: method, body: JSON.stringify(body), headers: headers }).then((response) => {
    if (response.ok) {
        return response.json();
    }
    return response.json().then(error => {
        const e = new Error('Error!')
        e.data = error
        throw e
    })
  });
}

// sendRequest("GET", request)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Vals",
  age: 25,
};

sendRequest("POST", request, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
