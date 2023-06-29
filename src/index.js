// import "./css/styles.css";
// import Weather from "./weather.js";
// import NyReview from "./nyReviews.js";

// function getWeather(zip) {
//   Weather.getWeather(zip)
//     .then(function (response) {
//       if (response.main) {
//         printElements(response, zip);
//       } else {
//         printError(response, zip);
//       }
//     });
// }

// function nyReviewProcessor(query) {
//   NyReview.getReview(query)
//     .then(function (response) {
//       if (response.results) {
//         printElements(response, null, query);
//       } else {
//         printError(response, query);
//       }
//     });
// }

// // UI LOGIC

// function printElements(response, zip, query) {
//   const displayTitle = response.results[0].display_title; // Access the display_title value from the first result (index 0)
//   document.querySelector('#showResponse').innerText = `The humidity in ${zip}, is ${response.main.humidity}%. The temperature in blank is ${response.main.temp} degrees.
//   Movies with the query ${query} are: ${displayTitle}`;
// }

// function printError(error, location) {
//   document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${location}: ${error}.`;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const zip = document.querySelector('#location').value;
//   const query = document.querySelector('#query').value;
//   document.querySelector('#location').value = '';
//   document.querySelector('#query').value = '';
//   getWeather(zip);
//   nyReviewProcessor(query);
// }

// window.addEventListener("load", function () {
//   document.querySelector('form').addEventListener("submit", handleFormSubmission);
// });
