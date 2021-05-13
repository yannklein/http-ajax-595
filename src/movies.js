const input = document.querySelector("#keyword");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  results.innerHTML = "";
  movies.forEach((movie) => {
      results.insertAdjacentHTML(
        "beforeend",
        `<li class='list-inline-item'>
          <img height="160" src="${movie.Poster}" alt="poster" />
        </li>`);
    });
};

const fetchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      displayMovies(data.Search);
    })
};

const searchMovies = (event) => {
  event.preventDefault();
  fetchMovies(input.value);
};

export {fetchMovies, searchMovies};