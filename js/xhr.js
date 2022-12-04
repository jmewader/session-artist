const request = "https://jsonplaceholder.typicode.com/comments";

function sendRequest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", request);

  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.error(xhr.response);
    }
    console.log(xhr.response);
  };

  xhr.onerror = () => {
    console.log(xhr.response);
  };

  xhr.send();
}
