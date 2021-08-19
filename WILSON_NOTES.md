Hello! I will be typing this in bullet point format to make it easier for me to lay out my thought process.

## Running the app
NOTE 1: If running locally, make sure to re-enable the CORS middleware in `backend/server/index.js`.
NOTE 2: If deployed, make sure to update the API server link in `frontend/client/src/utils/URL.js`
- Starting the client server
  - `cd frontend`
  - `npm i`
  - `npm run build`
  - `npm start`
- Starting the API server
  - `cd backend`
  - `npm i`
  - `npm start`

### Frontend
- For the frontend, I wanted to start off with implementing the game logic as well as the game board itself. I figured that this area of the project would be the crux for me so I wanted to hit the ground running with it.
- To start off, I set up a Node server using Express to serve up my frontend code then I configured Babel and Webpack.
- I implemented CSS Grid for the game board pretty early on because of how useful it was to get the pieces exactly where I wanted them.
### Backend
- I set up a pretty basic Express server which stored data in-memory.
- One portion which tripped me up was serving up the correct time for SF and NY but I was able to get to a solution by following the Momentjs documentation.
- I decided to use CORS for the time being in order to address other areas of the project. This is something I want to resolve though upon deployment.
### Routing & Authentication
- I decided to go with React-Router because it gave me the ease of maintaining state and traversing urls.
- My app is quite reliant on a `loggedIn` property stored in local storage so I decided to take advantage of that by deleting the `loggedIn` property when logging out. This meant that I didn't need to implement a /logout route on the API server.
- I implemented a very simple authentication system which did a comparison with in-memory data on the API server. Once a user was verified, a loggedIn property of `true` as well as the username would be stored in local storage.
- I will absolutely admit that authentication is not optimal. Given more time, I would have implemented a different solution which would have authenticated routes as well has obfuscated user data.
### Game
- The game logic itself was pretty straight forward and it was easy to see what the game was supposed to do.
- I ended up making some helper functions to generate RGB values.
- I then generate 6 rgb values, assigned them to a box (via state and data-rgb html attribute), then randomly selected an rgb value to be the answer.
- When the user selected a box, I compared the value on that box's data-rgb attribute with the answer
- If the answer was correct, I used a confetti package to visually indicate that they got it right.
### Deployment
- I deployed both Node servers on a single AWS EC2 with NGINX and a reverse proxy
- This allowed me to not have to enable CORS because the browser now views all the information flow as originating from the same place.