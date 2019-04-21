# Programming Exercise: Address Book

## Dependencies

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Setup

Install Dependencies `npm install` from both the `api` and the `app` directories

## Run the api

```bash
node api/server.js
```

## Run the web app

(from the `app` directory)

```bash
npm run start
```

## URL Endpoints

The api server runs by default on port 8080. It provides a data url at
`/api/people`.

## Goals

- `git checkout -b [my-address-book|your-name]` a fresh branch from these files.
- Create a simple address book web application and use the given static
  HTML mockup (`mockup/index.html`) as a starting point or as inspiration.
- Your client application should fetch people data from the api source.
- It should render the names of all people from the people data in the left
  panel in alphabetical order.
- When a person's name is clicked in the left panel, render the full profile in
  the right panel.
- Update the `README.md` with any instructions for running the web application.
- When you are done, send a zip archive over email with your changes.

### Bonus Points

- Add image URLs to the people data and render these photos in the profile
- Make it possible to change sort order of people shown in directory panel
- Expand on the flexibility of the people data and how its rendered to the user (be creative!)

### Additional Notes

- Feel free to add any libraries to the client or server apps that you'd like to
  utilize.
- Feel free to modify `data/people.json` with any changes that you see fit.
- Feel free to add additional routes to the express app by modifying
  `api/app.js`
- Your address book does not need to use the exact same CSS or HTML as provided
  by the mockup.