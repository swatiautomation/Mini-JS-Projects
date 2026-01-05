const searchInput = document.querySelector('.searchInput');
const form = document.querySelector('form');
const searchBtn = document.querySelector('#search-btn');
const imageContainer = document.querySelector('.image-container');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let pageNo = 1;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  pageNo = 1;
  if (searchInput.value.trim() !== '') {
    fetchImages(searchInput.value, pageNo);
  } else {
    imageContainer.innerHTML = `<h2>Please enter a search term</h2>`;
  }
});

async function fetchImages(word, pageNo) {
  try {
    if (pageNo === 1) {
      imageContainer.innerHTML = '';
    }
    const url = `https://api.unsplash.com/search/photos?query=${word}&per_page=30&page=${pageNo}&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      data.results.forEach((photo) => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('imageDiv');
        imgElement.innerHTML = `<img src="${photo.urls.regular}" />`;

        // const tooltip = document.createElement('div');
        // tooltip.classList.add('tooltip');
        // tooltip.innerText = `${photo.alt_description}`;
        // imgElement.appendChild(tooltip);

        imgElement.addEventListener('dblclick', () => {
          window.open(photo.links.download, 'target=_blank');
        });

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const overLayText = document.createElement('h3');
        overLayText.innerText = `Photo by ${
          photo.alt_description || 'Unknown'
        }`;

        overlay.appendChild(overLayText);
        imgElement.appendChild(overlay);
        imageContainer.appendChild(imgElement);
      });

      if (data.total_pages === pageNo) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
    } else {
      imageContainer.innerHTML = `<h2>No results found</h2>`;
    }
  } catch (err) {
    imageContainer.innerHTML = `<h2>Error in fetching images</h2>`;
  }
  //  console.log(data);
}

loadMoreBtn.addEventListener('click', () => {
  pageNo++;
  fetchImages(searchInput.value.trim(), ++pageNo);
});

function changeBackground() {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);

  if (hours >= 6 && hours <= 18) {
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = '#000';
  } else {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#fff';
  }
}
window.addEventListener('load', changeBackground);
