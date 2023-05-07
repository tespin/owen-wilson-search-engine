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

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const meta = document.querySelector('.search-meta');
  meta.innerHTML = `Search results for: "${searchInput.value}"`;
  const url =
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=100';
  const apiResults = await fetch(url);
  const json = await apiResults.json();
  console.log(json[5].movie);
  console.log(searchInput.value);
  const results = json.filter((item) => {
    return item.movie.toLowerCase().startsWith(searchInput.value.toLowerCase());
  });

  searchResultsContainer.innerHTML = results
    .slice(0, 3)
    .map((result, index) => {
      return `
      <div class="flex xs:flex-col xs:mt-4">
        <div class="xs:mb-8">
          <img
          src=${result.poster}
          class="xs:w-96 xs:h-96 object-cover xs:rounded-md xs:shadow-md"
          />
          <div class="flex flex-row justify-between xs:w-full xs:mt-2">
            <p>"${result.full_line}"</p>
            <p class="text-gray-400">
              ${result.movie} (${result.year})
            </p>
          </div>
        </div>
      </div>
      `;
    })
    .join('');
});
