# Vaccine application

## Technology choices
- React
- Node.js, Express.js
- PostgreSQL with Docker

## Development environment

Frontend and backend are in their own subcatalogues. 

### Frontend

Run frontend locally using the following command in the **frontend catalogue**:

`npm start`

### Backend

Start Postgres database server in Docker by running the following command at the **root** of the project:

`docker-compose up`

Open another tab in your terminal and initialize database with the resource files that come with the project by running the following commands in the **backend catalogue**. Type Ctrl+c after each.

`npm run dev order antiqua.source` 

`npm run dev order solarBuddhica.source` 

`npm run dev order zerpfy.source` 

`npm run dev vaccination vaccinations.source`

Now the database has been initialized. Run backend using:

`npm run dev`

### Closing the program

Close the database using:

`docker-compose down`

Frontend and backend can be stopped with Ctrl+C. Note that the database needs to be re-initialized if the program is closed.