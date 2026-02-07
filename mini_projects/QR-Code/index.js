const generate = document.querySelector('#generate');
const download = document.querySelector('#download');
const size = document.querySelector('#sizes');
const text = document.querySelector('#text');
const qrBody = document.querySelector('.qr-body');

const isEmpty = () => {
  text.value.length > 0
    ? generateQRCode()
    : alert('Please enter text or URL to generate QR Code');
};
const generateQRCode = () => {
  qrBody.innerHTML = '';
  new QRCode(qrBody, {
    text: text.value,
    width: size.value,
    height: size.value,
    colorDark: '#000000',
    colorLight: '#ffffff',
  });
};

generate.addEventListener('click', (e) => {
  e.preventDefault();
  isEmpty();
});

download.addEventListener('click', () => {
  const img = document.querySelector('.qr-body img');
  img !== null
    ? download.setAttribute('href', img.src)
    : download.setAttribute('href', '#');
});
