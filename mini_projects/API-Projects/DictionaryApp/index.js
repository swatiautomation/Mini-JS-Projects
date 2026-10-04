// Selectors
const form = document.querySelector("form");
const result = document.querySelector("#result");
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en`;

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordDefinition(form.elements[0].value);
});

// functions to fetch data for synonyms, antonyms, example and definition
function synonymsHeader(data) {
  let synonymsHtml = "";

  const synonyms = data
    .map((item) =>
      item.meanings.map((d) => d.definitions.map((dg) => dg.synonyms)),
    )
    .flat(Infinity);

  if (synonyms.length > 0) {
    synonymsHtml += synonyms.join(", ");
  }

  return synonymsHtml;
}

function antonymsHeader(data) {
  let antonymsHtml = "";

  const antonyms = data
    .map((item) => item.meanings.map((d) => d.antonyms))
    .flat(Infinity);

  if (antonyms.length > 0) {
    antonymsHtml += antonyms.join(", ");
  }

  return antonymsHtml;
}

function exampleHeader(data) {
  let exampleHtml = "";

  const exampleHeader = data
    .map((item) =>
      item.meanings.map((d) =>
        d.definitions.map((dg) => dg.example).filter(Boolean),
      ),
    )
    .flat(Infinity);

  if (exampleHeader.length > 0) {
    exampleHtml += exampleHeader.join(",");
  }

  return exampleHtml;
}

function fetchWordDefinition(data) {
  let definitionHtml = "";

  const definitions = data
    .map((item) =>
      item.meanings.map((d) => d.definitions.map((df) => df.definition)),
    )
    .flat(Infinity);
  if (definitions.length > 0) {
    definitionHtml += `<ul class="newList">${definitions
      .map((def) => `<li>${def}</li>`)
      .join("")}</ul>`;
  }

  return definitionHtml;
}

// Dictionary API
async function getWordDefinition(searchQueryWord) {
  let html = ""; // Clear previous results
  try {
    result.innerHTML = "Fetching definition...";
    const url = `${baseUrl}/${searchQueryWord}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.title);
    if (!response.ok) {
      result.innerHTML = ` 
      <div> 
      <h2> ${data.title || "No Definitions Found"}</h2>
      <p>${data.message || "Please try another word."}</p>
      </div>

      `;
      return;
    }
    const definition = data[0].meanings[0];

    html += `
    <div>
      <h2><strong>Word: </strong> ${data[0].word}</h2>
      <p style="font-style: italic;"><strong>Part of Speech: </strong>${
        definition.partOfSpeech
      }</p>
        <p><strong>Example: </strong>${exampleHeader(data) || "N/A"}</p>
        <p> <strong>Antonyms: </strong>${antonymsHeader(data) || "N/A"}</p>
        <p><strong>Synonyms: </strong>${synonymsHeader(data) || "N/A"}</p>
        <div><strong>Definition: </strong>${fetchWordDefinition(data)}</div>
    </div>`;

    html += `<a href="${data[0].sourceUrls}" target="_blank" rel="noopener noreferrer">Source <span class='sr-only'>(opens in new tab)</span></a>`;
    result.innerHTML = html; // Update the result container with the new HTML
  } catch (error) {
    console.error("Error fetching definition:", error);
    result.innerHTML = `<div> Something went wrong.Please try again.</div>`;
  }
}
