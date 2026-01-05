/**
 * Write a javascript function to get the extension of a filename.
 *
 *
 */

function getFileExtension(filename) {
  const parts = filename.split('.');
  console.log(parts);
  const ext = parts.pop();
  console.log(ext);
}

getFileExtension('document.pdf'); // 'pdf'
getFileExtension('image.jpeg'); // 'jpeg'
getFileExtension('archive.tar.gz'); // 'gz'

// Using Arrow Function
console.log('Using Arrow Function:');
const getFileExtension1 = (filename) => {
  const parts = filename.split('.');
  return parts.pop();
};

console.log(getFileExtension1('document.pdf')); // 'pdf'
console.log(getFileExtension1('image.jpeg'));
console.log(getFileExtension1('archive.tar.gz')); // 'gz'

//OR using slice() method
console.log('Using slice() method:');

function getFileExtension2(filename) {
  return filename.slice(filename.lastIndexOf('.'));
}

console.log(getFileExtension2('document.pdf')); // 'pdf'
console.log(getFileExtension2('image.jpeg'));
console.log(getFileExtension2('archive.tar.gz')); // 'gz'
