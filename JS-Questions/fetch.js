// import fetch from 'node-fetch';
import fs from 'fs/promises';

const response = fetch(
  'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
);
//console.log(response);

response
  .then((message) => {
    // console.log(message);
    // for (const key in message) {
    //   console.log(key);
    // }
    // console.log(message.__proto__);
    // console.log(message.statusText);
    return message.json();
  })
  .then((data) => {
    // console.log(data);
  });

const fetchData = async () => {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
  );
  const data = await res.json();
  //const data = await res.text();
  //const data = await res.blob();
  //const data = await res.formData();
  // console.log(data);
};

fetchData();

//==========================================
const url = 'https://api.github.com/users/octocat';

const fetchData1 = async () => {
  const response = await fetch(url);
  const dataJson = await response.json();
  // const dataText = await response.text();
  // console.log(dataJson);
  // console.log(dataJson.location);
  //  console.log(dataText);
};

fetchData1();

const response2 = fetch('https://api.github.com/users/octocat');
response2
  .then((result) => {
    return result.text();
  })
  .then((data) => {
    // console.log(data);
  });

//==========================================
const fetchData2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
  console.log(data.title);
};
//fetchData2();

//==========================================

const fetchData3 = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const data = await response.json();
  // console.log(data);
  console.log(data.sprites.other['official-artwork'].front_default);
};
//fetchData3();

//==========================================

const fetchImage = async () => {
  const response = await fetch(
    'https://w.wallhaven.cc/full/ml/wallhaven-mlzoy1.png',
  );
  //console.log(response);
  // const data = await response.blob();
  const data = await response.arrayBuffer();

  console.log(data);
  await fs.writeFile('wallpaper.png', Buffer.from(data));
};

fetchImage();
