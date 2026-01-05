const input = document.querySelector('#input');
const searchBtn = document.querySelector('#search-btn');
const grid = document.querySelector('.grid');
const loadMoreBtn = document.querySelector('.loadMoreBtn');
let pageNo = 1;

window.addEventListener('load', dayNightMode);

input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    loadImg(input.value.trim(), pageNo);
  }
});

async function loadImg(word, pageNo) {
  if (pageNo === 1) removeImages();

  const url = `https://api.unsplash.com/search/photos?query=${word}&per_page=30&page=${pageNo}&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;

  await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error('Error in fetching images');
    })
    .then((data) => {
      console.log(data);

      if (data.results.length > 0) {
        data.results.forEach((photo) => {
          const imgDiv = document.createElement('div');
          imgDiv.className = 'img';
          imgDiv.style.backgroundImage = `url(${photo.urls.regular})`;

          const tooltip = document.createElement('div');
          tooltip.classList.add('tooltip');
          tooltip.innerText = `${photo.alt_description}`;
          imgDiv.appendChild(tooltip);

          imgDiv.addEventListener('dblclick', () => {
            window.open(photo.links.download, '_blank');
          });
          grid.appendChild(imgDiv);
        });
        if (data.total_pages === pageNo) {
          loadMoreBtn.style.display = 'none';
        } else {
          loadMoreBtn.style.display = 'block';
        }
      } else {
        grid.innerHTML = `<h2>No results found</h2>`;
        loadMoreBtn.style.display = 'none';
      }
    });
}

loadMoreBtn.addEventListener('click', () => {
  pageNo++;
  loadImg(input.value.trim(), pageNo);
});

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
