const input = document.querySelector('#input');
const searchBtn = document.querySelector('#search-btn');
const grid = document.querySelector('.grid');
window.addEventListener('load', dayNightMode);
input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    loadImg();
  }
});

function loadImg() {
  removeImages();

  const url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error('Error in fetching images');
    })

    .then((data) => {
      const imageNodes = [];

      for (let i = 0; i < data.results.length; i++) {
        imageNodes[i] = document.createElement('div');
        imageNodes[i].className = 'img';
        imageNodes[
          i
        ].style.backgroundImage = `url(${data.results[i].urls.raw})`;
        imageNodes[i].addEventListener('dblclick', () => {
          window.open(data.results[i].links.download, '_blank');
        });
      }
      grid.append(...imageNodes);
    });
}

function removeImages() {
  grid.innerHTML = '';
}

function dayNightMode() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  } else {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#fff';
  }
}
