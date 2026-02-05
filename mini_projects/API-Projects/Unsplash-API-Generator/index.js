const input = document.querySelector('#input');
const grid = document.querySelector('.grid');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let pageNo = 1;
const baseUrl = `https://api.unsplash.com/search/photos?query=`;

input.addEventListener('keyup', function (event) {
  event.key === 'Enter' ? loadImg(input.value.trim(), pageNo) : null;
});

// Load more images on button click
loadMoreBtn.addEventListener('click', () => {
  pageNo++;
  loadImg(input.value.trim(), pageNo);
});

// Functions to fetch data for images
async function loadImg(word, pageNo) {
  pageNo === 1 ? removeImages() : null;

  const url = `${baseUrl}${word}&per_page=30&page=${pageNo}&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;

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

          imgDiv.addEventListener('click', () => {
            window.open(photo.links.download, '_blank');
          });
          grid.appendChild(imgDiv);
        });
        data.total_pages === pageNo
          ? (loadMoreBtn.style.display = 'none')
          : (loadMoreBtn.style.display = 'block');
      } else {
        grid.innerHTML = `<h2>No results found</h2>`;
        loadMoreBtn.style.display = 'none';
      }
    });
}

removeImages = () => {
  grid.innerHTML = '';
};

dayNightMode = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  } else {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#fff';
  }
};
// Event Listeners
window.addEventListener('load', dayNightMode);
