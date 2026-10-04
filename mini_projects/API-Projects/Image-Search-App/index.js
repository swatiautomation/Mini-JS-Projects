const searchInput = document.querySelector(".searchInput");
const form = document.querySelector("form");
const searchBtn = document.querySelector("#search-btn");
const imageContainer = document.querySelector(".image-container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const statusMsg = document.querySelector("#status");

const baseUrl = `https://api.unsplash.com/search/photos?query=`;
let pageNum = 1;

function announce(message) {
  statusMsg.textContent = message;
}

// Event listener for Enter key press

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const term = searchInput.value.trim();
  if (term === "") {
    imageContainer.innerHTML = `<h2>Please enter a search term</h2>`;
    loadMoreBtn.style.display = "none";
    announce("Please enter a search term");
    searchInput.focus();
    return;
  }
  pageNum = 1;
  fetchImages(term, pageNum);
});

// Function to fetch images from Unsplash API
async function fetchImages(SearchItem, pageNum) {
  try {
    pageNum === 1 && (imageContainer.innerHTML = ""); // Clear images only on the first page

    const url = `${baseUrl}${encodeURIComponent(SearchItem)}&per_page=30&page=${pageNum}&client_id=BekaH84Ex6BqFGpDpfV1TUvNJoNxwu32YKIifMcp5Ok`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    if (data.results.length > 0) {
      data.results.forEach((photo) => {
        const caption = photo.alt_description || "Untitled photo";

        const link = document.createElement("a");
        link.classList.add("imageDiv");
        link.href = photo.links.download;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = photo.urls.regular;
        img.alt = caption;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.setAttribute("aria-hidden", "true");

        const overLayText = document.createElement("p");
        overLayText.innerText = caption;
        overlay.appendChild(overLayText);

        const newTab = document.createElement("span");
        newTab.classList.add("sr-only");
        newTab.textContent = "(open in new tab)";

        link.append(img, overlay, newTab);
        imageContainer.appendChild(link);
      });

      loadMoreBtn.style.display =
        pageNum >= data.total_pages ? "none" : "block";
      announce(`${data.results.length} images loaded for "${SearchItem}"`);
    } else {
      imageContainer.innerHTML = `<h2>No results found</h2>`;
      loadMoreBtn.style.display = "none";
      announce("No results found");
    }
  } catch (err) {
    imageContainer.innerHTML = `<h2>Error in fetching images</h2>`;
    loadMoreBtn.style.display = "none";
    announce("Error in fetching images");
  }
}

// Load more button event listener
loadMoreBtn.addEventListener("click", () => {
  pageNum++;
  fetchImages(searchInput.value.trim(), pageNum);
});

// Function to change background based on time of day
function changeBackground() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours <= 18) {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#fff";
  }
}

// Call the function to change background on page load
window.addEventListener("load", changeBackground);
