# Vaccine application

## Technology choices
- React
- Node.js, Express.js
- PostgreSQL with Docker

## Using the application

Frontend and backend are in their own subcatalogues. PostgreSQL database is run in a Docker container.

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

## Run tests

Tests can be run with:

`npm run test`

## Backend API

| Endpoint        | Method | Description                       |
|-----------------|--------|-----------------------------------|
| /api/orders | GET    | Returns all orders. |
| /api/vaccinations      | GET    | Returns all vaccinations.      |