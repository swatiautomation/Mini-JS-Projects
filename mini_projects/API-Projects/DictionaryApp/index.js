// Selectors
const form = document.querySelector('form');
const result = document.querySelector('#result');
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en`;

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWordDefinition(form.elements[0].value);
});

// functions to fetch data for synonyms, antonyms, example and definition
function synonymsHeader(data) {
  let synonymsHtml = '';
  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < data[k].meanings.length; i++) {
      const def = data[k].meanings[i];
      for (let j = 0; j < def.synonyms.length; j++) {
        synonymsHtml += `<ul><li>${def.synonyms[j]}</li></ul>`;
      }
    }
  }
  return synonymsHtml;
}

function antonymsHeader(data) {
  let antonymsHtml = '';
  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < data[k].meanings.length; i++) {
      const def = data[k].meanings[i];
      for (let j = 0; j < def.antonyms.length; j++) {
        antonymsHtml += `<ul><li>${def.antonyms[j]}</li></ul>`;
      }
    }
  }
  return antonymsHtml;
}

function exampleHeader(data) {
  let exampleHtml = '';
  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < data[k].meanings.length; i++) {
      const def = data[k].meanings[i];
      for (let j = 0; j < def.definitions.length; j++) {
        if (def.definitions[j].example) {
          exampleHtml += `<ul><li>${def.definitions[j].example}</li></ul>`;
        }
      }
    }
  }
  return exampleHtml;
}

function fetchWordDefinition(data) {
  let definationHtml = '';
  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < data[k].meanings.length; i++) {
      const def = data[k].meanings[i];
      for (let j = 0; j < def.definitions.length; j++) {
        if (def.definitions[j].definition) {
          definationHtml += `<ul class="newList"><li>${def.definitions[j].definition}</li></ul>`;
        }
      }
    }
  }
  return definationHtml;
}

// Dictionary API
async function getWordDefinition(searchQueryWord) {
  let html = ''; // Clear previous results
  try {
    result.innerHTML = 'Fetching definition...';
    const url = `${baseUrl}/${searchQueryWord}`;
    const data = await fetch(url).then((response) => response.json());
    console.log(data);
    console.log(data.length);
    const definition = data[0].meanings[0];
    html += `
  <div>
      <h1><strong>Word: </strong> ${data[0].word}</h1>
      <p style="font-style: italic;"><strong>Part of Speech: </strong>${
        definition.partOfSpeech
      }</p>
      <p><strong>Example: </strong>${exampleHeader(data) || 'N/A'}</p>
       <p> <strong>Antonyms: </strong>${antonymsHeader(data) || 'N/A'}</p>
       <p><strong>Synonyms: </strong>${synonymsHeader(data) || 'N/A'}</p>
       <p><strong>Definition: </strong>${fetchWordDefinition(data)}</p>
      </div>`;

    html += `<a href="${data[0].sourceUrls}" target="_blank">Source</a>`;
    result.innerHTML = html; // Update the result container with the new HTML
  } catch (error) {
    result.innerHTML = `<div><p>No Results Found.</p></div>`;
    console.error('Error fetching definition:', error);
  }
}
