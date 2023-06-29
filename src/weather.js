// export default class Weather {
//   static getWeather(zip) {
//     const apiKey = process.env.WEATHER_API_KEY;
//     return fetch(
//       `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zip}`
//     )
//       .then(function (response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(function (error) {
//         return error;
//       });
//   }
// }