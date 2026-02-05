const searchInput = document.querySelector('.searchInput');
const form = document.querySelector('form');
const searchBtn = document.querySelector('#search-btn');
const imageContainer = document.querySelector('.image-container');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

const baseUrl = `https://api.unsplash.com/search/photos?query=`;
let pageNum = 1;

// Event Listeners
searchBtn.addEventListener('click', () => {
  searchInput.value.trim() !== ''
    ? fetchImages(searchInput.value, pageNum)
    : (imageContainer.innerHTML = `<h2>Please enter a search term</h2>`);
});

// Event listener for Enter key press

form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchInput.value.trim() !== ''
    ? fetchImages(searchInput.value, pageNum)
    : (imageContainer.innerHTML = `<h2>Please enter a search term</h2>`);
});

// Function to fetch images from Unsplash API
async function fetchImages(SearchItem, pageNum) {
  try {
    pageNum === 1 ? (imageContainer.innerHTML = '') : null; // Clear images only on the first page

    const url = `${baseUrl}${SearchItem}&per_page=30&page=${pageNum}&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;
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
        imgElement.addEventListener('click', () => {
          window.open(photo.links.download, 'target=_blank');
        });

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const overLayText = document.createElement('h3');
        overLayText.innerText = `${photo.alt_description || 'Unknown'}`;

        overlay.appendChild(overLayText);
        imgElement.appendChild(overlay);
        imageContainer.appendChild(imgElement);
      });

      data.total_pages === pageNum
        ? (loadMoreBtn.style.display = 'none')
        : (loadMoreBtn.style.display = 'block');
    } else {
      imageContainer.innerHTML = `<h2>No results found</h2>`;
    }
  } catch (err) {
    imageContainer.innerHTML = `<h2>Error in fetching images</h2>`;
    throw err;
  }
}

// Load more button event listener
loadMoreBtn.addEventListener('click', () => {
  pageNum++;
  fetchImages(searchInput.value.trim(), pageNum);
});

// Function to change background based on time of day
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

// Call the function to change background on page load
window.addEventListener('load', changeBackground);
