# Vaccine application

This application presents data on vaccine orders and vaccinations. Data can be filtered by date and producer. Have a look at a demo video [here](https://github.com/tsalohei/vaccine/blob/master/videos/demo_vaccine.mov).

## Technology choices
- React
- Node.js
- PostgreSQL with Docker
- Sequelize as ORM

## Using the application

The application can be used in a Unix environment. You will also need Docker.

First, clone the project. Then open three tabs in the terminal. Open the frontend catalogue in the first, backend catalogue in the second, and root of the project in the third.

### Frontend

Run frontend locally using the following command in the **frontend catalogue**:

`npm start`

### Backend

Start Postgres database server in Docker by running the following command at the **root** of the project:

`docker-compose up`

Now switch to the tab where you have the **backend catalogue** open. Initialize the database with the resource files that come with the project by using the commands below. Type Ctrl+c after each command when data has finished downloading and move on to the next command.

`npm run fill-db order antiqua.source` (Ctrl+c)

`npm run fill-db order solarBuddhica.source` (Ctrl+c)

`npm run fill-db order zerpfy.source` (Ctrl+c)

`npm run fill-db vaccination vaccinations.source` (Ctrl+c)

Now the database has been initialized with data from the resource files. 

Next, run backend using:

`npm run dev`

The program is now up and running. Navigate to http://localhost:3000/ to see the web page. 

### Closing the program

Close the database using:

`docker-compose down`

Frontend and backend can be stopped with Ctrl+c. Note that the database needs to be initialized again if the program is closed.

## Tests

### Backend integration tests

Use the following command in the backend catalogue:

`npm test`

### Frontend unit tests

Use the following command in the frontend catalogue:

`npm run test` (and press `a` to run all tests)

### End-to-end tests

Start the application before running Cypress end-to-end tests. Then, use the following command in the frontend catalogue: 

`npm run cypress:open`

A chrome window opens for running the tests in browser.

## Backend API

| Endpoint        | Method | Description                       |
|-----------------|--------|-----------------------------------|
| /api/orders?date=value&producer=value | GET    | Returns all orders arrived before specified date (epoch time), from specified producer. |
| /api/doses?date=value&producer=value | GET    | Returns all doses before specified date (epoch time), from specified producer  |
| /api/vaccinations?date=value&producer=value     | GET    | Returns all vaccinations injected before specified date, from specified producer (epoch time).      |