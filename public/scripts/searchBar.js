// let ejs = require('ejs');

let suggestions = [];
const searchInput = document.querySelector('.search-input');
const resultsContainer = document.querySelector('.autocomplete-results');
const searchResultsContainer = document.querySelector('.search-results');

window.addEventListener('load', async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/movies';
  const results = await fetch(url);
  const json = await results.json();

  suggestions = json;
});

document.body.addEventListener('click', (event) => {
  if (event.target === searchInput) return;
  resultsContainer.classList.add('hidden');
  resultsContainer.innerHTML = '';
});

searchInput.addEventListener('keyup', (event) => {
  const { key } = event;

  switch (key) {
    case 'Enter':
    case 'Escape':
      event.preventDefault();
      return;
    default:
      showResults();
  }
});

searchInput.addEventListener('keydown', (event) => {
  const { key } = event;

  switch (key) {
    case 'Escape':
      resultsContainer.classList.add('hidden');
      searchInput.value = '';
    case 'Enter':
    // return;
    default:
  }
});

resultsContainer.addEventListener('click', (event) => {
  searchInput.value = event.target.innerText;
  resultsContainer.classList.add('hidden');
});

const searchFn = (input) => {
  if (input.length < 1) {
    return [];
  }
  return suggestions.filter((item) =>
    item.toLowerCase().startsWith(input.toLowerCase())
  );
};

const showResults = () => {
  const input = searchInput.value;
  const results = searchFn(input);

  resultsContainer.classList.add('hidden');
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    return;
  }

  resultsContainer.innerHTML = results
    .map((result, index) => {
      return `
    <li
      class='search-result hover:bg-gray-400 cursor-default'>
      ${result}
    </li>`;
    })
    .join('');

  resultsContainer.classList.remove('hidden');
};
