const url = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData(callback) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  callback(data);
}

function displayMessage(data) {
	document.getElementById("output").innerText = data.title;
}
//your JS code here. If required.
