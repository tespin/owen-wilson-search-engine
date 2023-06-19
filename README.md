# Owen Wilson Wow Search Engine

The Owen Wilson Wow Search Engine lets you search for every instance the word "Wow" is said by actor Owen Wilson. It pulls from Avi Mamenko's [Owen Wilson Wow API](https://owen-wilson-wow-api.onrender.com/). It features:

- search by movie title
- navigation through paginated results
- random 'Wows' on the home page
- testing on the API calls
- responsive design across various window sizes

The project was made with [Node.js](https://nodejs.org/en), [Express](https://expressjs.com/), [Jest](https://jestjs.io/) and [EJS](https://ejs.co/).

## Running locally

1. Clone the repository on your machine.

```
git clone https://github.com/tespin/owen-wilson-search-engine.git
```

2. Install the necessary dependencies.

```
npm install
```

3. Start the project locally.

```
npm run start
```

The project should now be running on localhost:3001. Run `npm test` to ensure that calls to the API are working correctly.

## Development

To set up live reloading of project files, open three Terminal windows. In the first, run `npm run watch:css`. This watches for CSS changes and rebuilds `tailwindcss` automatically.

Next, use `npm run dev` to listen for changes to server files.

Finally, run `npm run ui` to enable `browser-sync` and reload the browser automatically when changes are made to browser files.

## Notes

Working on this project was a great learning opportunity because it involved picking up EJS and Jest testing. Since I learned JSX (through React) before EJS, I was able to grasp some similarities between the two and that made it easier to understand EJS. I appreciate React more knowing how much easier it is to write computational logic alongside HTML, and for the way React manages UI updates with client-side rendering.

Writing Jest tests also forced me to write code that was more succinct and modular. I had a lot of trouble writing my first test because the function I was testing was fetching from the API and filtering the results. By separating those functions out I was able to write passing tests for the API calls.

One other thing I spent a lot of time on was understanding how to build a search bar with autocomplete results. From a UI perspective I had to think about how to design the search bar itself, display autocomplete results, and compose a page for search results. To implement it, I had to have a list of all results and then filter based on every key up. I could have had a JSON file to pull results from but decided to fetch them from the API on page load instead in case the API was updated with new movies.

## Moving Forward

I see a lot of room to build out the project, with my main priority being a WCAG-compliant search bar. Currently I'm able to type into the search bar, see results with each key up, and exit out / reset by clicking outside the search bar or pressing escape, but I haven't tested screen reader accessibility and the autocomplete results aren't navigable by keyboard. Since the search function is the primary verb of the project, it's important for it to accommodate these other interactions.

Since I'm fetching data on every page load, the project could also benefit from a cache. I also see room for securing against search input-related exploits.

Some animations could help make the project smoother to interact with and balance the amount of content displayed on the page. I would be open to adding more designed elements but in general am happy with the layout and responsiveness of the project across devices.
