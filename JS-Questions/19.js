/*


Write javascript program to generate a random hexadecimal color code.
**/

function getRandomHexColor() {
  // Generate a random integer between 0 and 16777215 (0xFFFFFF)
  const random = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  console.log(`#${random}`);
}

getRandomHexColor();
