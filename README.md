# RSS-Reader-App
PWA Angular App to fetch RSS feeds from TechCrunch.
There is a Menu to browse articles by category.
Once the article is clicked, the article content is opened as a reader with all the html content.
User can navigate back to the main page through Menu.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `npm install` to install all the required dependencies listed in package.json.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run the app on Development server
On rss-parser-api run `npm run start` to start the server and run the rest api on port 4000.
Then on rss-reader-app run `ng serve --proxy-config proxy.conf.json` to run the app on port 4200.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).