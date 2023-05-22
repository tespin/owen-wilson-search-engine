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
  console.log(results.length);

  resultsContainer.classList.add('hidden');
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    return;
  }

  resultsContainer.innerHTML = results
    .map((result, index) => {
      let first = index === 0 ? 'rounded-t-md' : '';
      let last = index === results.length - 1 ? 'rounded-b-md' : '';

      return `
    <li
      class='search-result py-1 px-2 hover:bg-gray-400 hover:text-white cursor-default ${first} ${last} '>
      ${result}
    </li>`;
    })
    .join('');

  resultsContainer.classList.remove('hidden');
};
