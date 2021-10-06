# Color Game

## Running the app
NOTE 1: If running locally, make sure to re-enable the CORS middleware in `backend/server/index.js`.
NOTE 2: If deployed, make sure to update the isProd boolean and the API server link in `frontend/client/src/utils/URL.js`
- Starting the client server
  - `cd frontend`
  - `npm i`
  - `npm run build`
  - `npm start`
- Starting the API server
  - `cd backend`
  - `npm i`
  - `npm start`

## Deployment
- I deployed both Node servers on a single AWS EC2 with NGINX and a reverse proxy
- This allowed me to not have to enable CORS because the browser now views all the information flow as originating from the same place.