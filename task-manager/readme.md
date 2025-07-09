## Tick-tick
### Task Manager using MERN stack


### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Form validations in frontend and backend
- Token based Authentication
- Use of 404 page for wrong urls
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- No external CSS files needed (made using Tailwind CSS)
- Usage of Tooltips
- Dynamic document titles
- Protected login routes
- Use of various React hooks
- Custom hook also used (useFetch)
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed


## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run watch
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /home             tasks after login
- /home/:taskId     Edit a task
</pre>

## npm scripts

Inside frontend folder:

- `npm run dev`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder

Inside backend folder:

- `npm run watch`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links

- This project

  - Github Repo: https://github.com/aayush301/MERN-task-manager

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world

- Download links

  - Nodejs download: https://nodejs.org/
  - VS Code download: https://code.visualstudio.com/
