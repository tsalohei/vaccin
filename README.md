# Vaccine application

## Technology choices
- React, JS
- Node
- Postgresql with Docker

## Development environment

Frontend and backend are in their own subcatalogues. 

### Frontend

Run frontend locally using the following command in the **frontend catalogue**:

`npm start`

### Backend

Start Postgres database server in Docker by running the following command at the **root** of the project:

`docker-compose up`

Open another tab in your terminal and initialize database with the resource files that are located by running the following commands in the **backend catalogue**. Type Ctrl+c after each.

`npm run dev order antiqua.source` 
`npm run dev order solarBuddhica.source` 
`npm run dev order zerpfy.source` 
`npm run dev vaccination vaccinations.source`

Now the database has been initialized. Run backend in development environment using:

`npm run dev`

Run backend locally using:

`npm start`
