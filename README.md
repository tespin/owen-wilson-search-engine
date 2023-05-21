# Owen Wilson Wow Search Engine

The Owen Wilson Wow Search Engine lets you search for every instance the word "Wow" is said by actor Owen Wilson. It pulls from Avi Mamenko's [Owen Wilson Wow API](https://owen-wilson-wow-api.onrender.com/). It features:

- search by movie title
- navigation through paginated results
- random 'Wows' on the home page
- testing on the API calls

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

The project should now be running on localhost:3001. Run

```
npm test
```

to ensure that calls to the API are working correctly.

## Development

"watch:css": "npx tailwindcss -i ./src/styles/input.css -o ./public/css/output.css --watch",
"test": "jest",
"start": "node server.js",
"dev": "nodemon server.js",
"ui": "browser-sync start --proxy localhost:3001 --files=\*_/_ --ignore=node_modules --no-ui --no-inject-changes"

To set up live reloading of project files, open three Terminal windows. In the first, run

```
npm run watch:css
```

This watches for CSS changes and rebuilds `tailwindcss` automatically. Next, use

```
npm run dev
```

to listen for changes to server files. Finally, run

```
npm run ui
```

to enable `browser-sync` and reload the browser automatically when changes are made to browser files.
