// export default class NyReview {
//   static getReview(query) {
//     const nyApiKey = process.env.NY_API_KEY;
//     const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${nyApiKey}`;

//     return fetch(url)
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
