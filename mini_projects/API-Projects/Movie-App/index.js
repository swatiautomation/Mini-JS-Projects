const form = document.querySelector('form');
const inputBox = document.querySelector('.inputBox');
const searchButton = document.querySelector('.searchButton');
const movieContainer = document.querySelector('.movie-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const movieName = inputBox.value.trim();
  if (movieName !== '') {
    showError('Loading...');
    fetchMovieData(movieName);
  } else {
    // movieContainer.innerHTML = '<h2>Please enter a movie name</h2>';
    // movieContainer.classList.add('nobackground');
    showError('Please enter a movie name');
  }
});

async function fetchMovieData(movie) {
  try {
    const url = `http://www.omdbapi.com/?apikey=bdc536c3&t=${movie}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    showMoveiData(data);
  } catch {
    showError('No Movie Found');
  }
}

function showMoveiData(movie) {
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
  <p><strong>Plot :</strong> ${Plot}</p>`;

  const moviePoster = document.createElement('div');
  moviePoster.classList.add('movie-poster');
  moviePoster.innerHTML = `<img src="${Poster}">`;
  movieContainer.appendChild(moviePoster);

  movieContainer.appendChild(movieElement);
}

function showError(message) {
  movieContainer.innerHTML = `<h2>${message}</h2>`;
  movieContainer.classList.add('nobackground');
}
