const form = document.querySelector('form');
const result = document.querySelector('#result');

let r = '';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  getWordDefinition(form.elements[0].value);
});

async function getWordDefinition(word) {
  r = ''; // Clear previous results
  try {
    result.innerHTML = 'Fetching definition...';
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const data = await fetch(url).then((response) => response.json());
    console.log(data);
    const definition = data[0].meanings[0];
    r += `
  <div
      <h1><strong>Word: </strong> ${data[0].word}</h1>
      <p style="font-style: italic;"><strong>Part of Speech: </strong>${
        definition.partOfSpeech
      }</p>
      <p><strong>Example: </strong>${
        definition.definitions[0].example || 'N/A'
      }</p>
       <p> <strong>Antonyms: </strong>${
         definition.antonyms.length > 0 ? definition.antonyms.join(', ') : 'N/A'
       }</p>

        <p><strong>Synonyms: </strong>${synonymsHeader()}</p>


        <p><strong>Definition: </strong></p>
      </div>`;

    for (let i = 0; i < data[0].meanings.length; i++) {
      const def = data[0].meanings[i];

      for (let j = 0; j < def.definitions.length; j++) {
        r += `<ul class="newList"><li>${def.definitions[j].definition}</li></ul>`;
      }
    }

    function synonymsHeader() {
      for (let i = 0; i < data[0].meanings.length; i++) {
        const def = data[0].meanings[i];

        for (let j = 0; j < def.synonyms.length; j++) {
          r += `<ul><li>${def.synonyms[j]},</li></ul>`;
        }
      }
      return r;
    }

    r += `<a href="${data[0].sourceUrls}" target="_blank">Source</a>`;
    result.innerHTML = r;
  } catch (error) {
    result.innerHTML = `<div><p>No Results Found.</p></div>`;
  }
}
