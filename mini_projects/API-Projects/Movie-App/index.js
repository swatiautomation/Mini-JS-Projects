//Selectors
const form = document.querySelector('form');
const inputBox = document.querySelector('.inputBox');
const movieContainer = document.querySelector('.movie-container');
const baseUrl = 'http://www.omdbapi.com/?apikey=bdc536c3&t=';

// Event Listeners
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const movieName = inputBox.value.trim();
  if (movieName !== '') {
    showMessage('Loading...');
    fetchMovieData(movieName);
  } else {
    showMessage('Please enter a movie name');
  }
});

// Fetch API Data
async function fetchMovieData(movieTitle) {
  try {
    const url = `${baseUrl}${movieTitle}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    showMovieData(data);
  } catch {
    showMessage('No Movie Found');
  }
}

// Function to display movie data
function showMovieData(movie) {
  movieContainer.innerHTML = ''; // Clear previous movie data
  movieContainer.classList.remove('nobackground');

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
  } = movie;

  const movieElement = document.createElement('div');
  movieElement.classList.add('movie-info');
  movieElement.innerHTML = `<h2>${Title}</h2>
  <p><strong>Rating : &#11088; </strong> ${imdbRating} / 10</p>`;

  const genreElement = document.createElement('div');
  genreElement.classList.add('movie-genre');

  Genre.split(',').forEach((element) => {
    const p = document.createElement('p');
    p.textContent = element.trim();
    genreElement.appendChild(p);
  });

  movieElement.appendChild(genreElement);

  movieElement.innerHTML += `<p><strong>Released Date :</strong> ${Released}</p>
  <p><strong>Duration :</strong> ${Runtime}</p>
  <p><strong>Cast :</strong> ${Actors}</p>
  <p><strong>Language :</strong> ${Language}</p>
  <p><strong>Plot :</strong> ${Plot}</p>
  `;

  const moviePoster = document.createElement('div');
  moviePoster.classList.add('movie-poster');
  moviePoster.innerHTML = `<img src="${Poster}">`;
  movieContainer.appendChild(moviePoster);

  movieContainer.appendChild(movieElement);
}

// Function to show messages
showMessage = (message) => {
  movieContainer.innerHTML = `<h2>${message}</h2>`;
  movieContainer.classList.add('nobackground');
};
