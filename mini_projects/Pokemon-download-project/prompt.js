import { input, checkbox, Separator, select } from '@inquirer/prompts';
import fs from 'fs/promises';
import path from 'path';

let answer = [];

const createFolder = async (folderName) => {
  folderName = path.join(process.cwd(), folderName);
  try {
    await fs.access(folderName);
  } catch {
    await fs.mkdir(folderName);
  }
};

const promptName = async () => {
  const name = await input({ message: 'Pokemon name: ' });
  console.log(`Hello, ${name}!`);
  if (name === '') {
    console.log('Invalid input.');
    await promptName();
  }
  return name;
};
const name = await promptName();

const fetchData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    console.log('Pokemon not found. Please try again.');
    await promptName();
    return;
  }
  const data = await response.json();
  return data;
};

const saveArtWork = async (name) => {
  const data = await fetchData(name);
  const image = await fetch(
    data.sprites.other['official-artwork'].front_default,
  );
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await createFolder('pokemon_images');
  await fs.writeFile(path.join('pokemon_images', `${name}.png`), buffer);
};

const saveStats = async (name) => {
  const data = await fetchData(name);
  const stat = data.stats.map((stat) => {
    return `${stat.stat.name}: ${stat.base_stat}`;
  });
  await createFolder('pokemon_stats');
  await fs.writeFile(
    path.join('pokemon_stats', `${name}.txt`),
    JSON.stringify(stat, null, 2),
  );
};

const saveSpriteImage = async (name) => {
  let spritPromise = [];
  let spriteNames = [];

  const data = await fetchData(name);
  for (const [key, value] of Object.entries(data.sprites)) {
    if (!value) continue;
    if (key === 'other' || key === 'versions') continue;
    spritPromise.push(await fetch(value));
    spriteNames.push(key);
  }
  await createFolder('pokemon_sprites');

  for (let i = 0; i < spritPromise.length; i++) {
    const spriteImage = spritPromise[i];
    const arrayBuffer = await spriteImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(
      path.join('pokemon_sprites', `${name}_${spriteNames[i]}.png`),
      buffer,
    );
  }

  /* const showdownSprites = {
    front_default: data.sprites.front_default,
    back_default: data.sprites.back_default,
    front_shiny: data.sprites.front_shiny,
    back_shiny: data.sprites.back_shiny,
  };
  //  await createFolder('pokemon_sprites');
  const values = Object.values(showdownSprites);
  for (let i = 0; i < values.length; i++) {
    const spriteImage = await fetch(values[i]);
    const arrayBuffer = await spriteImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(
      path.join(
        'pokemon_sprites',
        `${name}_showdown_${Object.keys(showdownSprites)[i]}.png`,
      ),
      buffer,
    );
  }*/
};

const promptChoices = async () => {
  answer = await checkbox({
    message: 'Pokemon info to download:',
    choices: [
      new Separator('--- Select the data you want to download ---'),
      { name: 'Stats', value: 'Stats' },
      { name: 'Sprite', value: 'Sprite' },
      { name: 'Artwork', value: 'Artwork' },
    ],
  });
  return answer;
};

await promptChoices();

const parseOptions = async (answer, name) => {
  for (const ans of answer) {
    if (ans === 'Stats') {
      console.log('Downloading Stats...');
      await saveStats(name);
    }
    if (ans === 'Sprite') {
      console.log('Downloading Sprite...');
      await saveSpriteImage(name);
    }
    if (ans === 'Artwork') {
      console.log('Downloading Artwork...');
      await saveArtWork(name);
    }
  }
};
await parseOptions(answer, name);

const continuePrompt = async () => {
  const finalAnswer = await select({
    message: 'Would you like to search for another pokemon? ',
    choices: ['yes', 'no'],
  });

  if (finalAnswer.toLowerCase() === 'yes') {
    const name = await promptName();
    await promptChoices(name);
    await continuePrompt();
  } else {
    console.log('Goodbye!');
  }
};
await continuePrompt();
