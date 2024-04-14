let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let formattedDate = `Today is ${currentDay} ${currentHour}:${currentMinute}`;

  return formattedDate;
}
let timeHTML = document.querySelector("#time");
timeHTML.innerHTML = formatDate(currentTime);

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#searched-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = searchInput.value;
  let apiKey = "a1baf73doab5c6t69019f5ca71e4d0af";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#time");

currentDateElement.innerHTML = formatDate(currentTime);
