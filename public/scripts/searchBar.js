// let suggestions = [
//   'Bottle Rocket',
//   'The Haunting',
//   'Breakfast of Champions',
//   'Shanghai Noon',
//   'Meet the Parents',
//   'Zoolander',
//   'I Spy',
//   'Shanghai Knights',
//   'The Big Bounce',
//   'Starsky & Hutch',
//   'Wedding Crashers',
//   'Cars',
//   'You, Me and Dupree',
//   'The Darjeeling Limited',
//   'Drillbit Taylor',
//   'Marley & Me',
//   'Marmaduke',
//   'Little Fockers',
//   'Hall Pass',
//   'Midnight in Paris',
//   'Cars 2',
//   'The Big Year',
//   'The Internship',
//   'Free Birds',
//   'Are You Here',
//   'Night at the Museum: Secret of the Tomb',
//   'No Escape',
//   'Cars 3',
//   'Father Figures',
// ];
let suggestions = [];
const searchInput = document.querySelector('.search-input');

window.addEventListener('load', async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/movies';
  const results = await fetch(url);
  const json = await results.json();

  suggestions = json;
  // console.log(suggestions);
});

searchInput.addEventListener('keyup', (event) => {
  const { key } = event;
  showResults();
  console.log('keyup fired');
  // event.preventDefault();
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
  console.log(results);
  const resultsContainer = document.querySelector('.search-results');
  resultsContainer.innerHTML = results
    .map((result, index) => {
      return `
    <li
      class='search-result'>
      ${result}
    </li>`;
    })
    .join('');
};

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const meta = document.querySelector('.search-meta');
  meta.innerHTML = `Search results for: "${searchInput.value}"`;
});
