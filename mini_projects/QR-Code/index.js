const generate = document.querySelector('#generate');
const download = document.querySelector('#download');
const sizes = document.querySelector('#sizes');
const text = document.querySelector('#text');
const qrBody = document.querySelector('.qr-body');

let size = sizes.value;
generate.addEventListener('click', (e) => {
  e.preventDefault();
  isEmpty();
});

// sizes.addEventListener('change', (e) => {
//   size = e.target.value;
//   isEmpty();
// });

function isEmpty() {
  text.value.length > 0
    ? generateQRCode()
    : alert('Please enter text or URL to generate QR Code');
}

download.addEventListener('click', () => {
  let img = document.querySelector('.qr-body img');
  if (img !== null) {
    let imgSrc = img.src;
    download.setAttribute('href', imgSrc);
  } else {
    download.setAttribute('href', '#');
  }
});

function generateQRCode() {
  qrBody.innerHTML = '';
  size = sizes.value;
  new QRCode(qrBody, {
    text: text.value,
    width: size,
    height: size,
    colorDark: '#000000',
    colorLight: '#ffffff',
  });
}
