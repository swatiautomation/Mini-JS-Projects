const copyIcon = document.querySelector(".copy-icon");
const colorName = document.querySelector(".color-name");
const generateBtn = document.querySelector(".js-generate-button");
const colorDiv = document.querySelector(".color-div");
const colorPalette = document.querySelector(".colorPalette");

colorPalette.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => {
        showCopyMsg(e.target);
      })
      .catch((err) => {
        console.log("Failed to copy text", err);
      });
  }
});

function showCopyMsg(e) {
  e.classList.remove("far", "fa-copy");
  e.classList.add("fas", "fa-check");
  e.style.color = "#48bb78";

  setTimeout(() => {
    e.classList.remove("fas", "fa-check");
    e.classList.add("far", "fa-copy");
    e.style.color = "";
  }, 1000);
}

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(generateRandomColor());
  }

  const colorBox = document.querySelectorAll(".color");
  colorBox.forEach((box, index) => {
    const color = colors[index];
    const colordivBox = box.querySelector(".color-div");
    const colorNameDiv = box.querySelector(".color-name");

    colordivBox.style.backgroundColor = color;
    colorNameDiv.textContent = color;
  });
}

function generateRandomColor() {
  const chars = "0123456789ABCDEF";
  let colorText = "#";
  for (let i = 0; i < 6; i++) {
    colorText += chars[Math.floor(Math.random() * 16)];
  }

  return colorText;
}
