# MERN Workout Tracker

Welcome to the MERN Workout Tracker project! This project allows users to track their workouts, log in securely, and view their own activities. The project consists of separate frontend and backend applications built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication: Users can sign up for an account or log in securely to track their workouts.
- Workout tracking: Users can add and delete workouts.
- Personalized dashboard: Each user has access to their own dashboard where they can view their past workout activities.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a remote MongoDB database URI.

### Backend Setup

  1. Navigate to the `backend` directory: 'cd backend'
  2. Install backend dependencies:
      - `npm install`
  3. Set up environment variables:
    - Ensure you have a `.env` file in the `backend` directory.
    - Modify the `MONGO_URI` variable in the `.env` file to point to your MongoDB        database. Example:
    ```
      MONGO_URI=mongodb+srv://<<username>>:<<password>>@mernapp.dtszqap.mongodb.net/?retryWrites=true&w=majority&appName=mernapp
     ````
  5. Run the backend server in development mode:
      - 'npm run dev'
    
        
### Frontend Setup

1. Open a new terminal window or tab.
2. Navigate to the `frontend` directory: 'cd frontend'
3. Install frontend dependencies: 'npm i'
4. Start the frontend development server: 'npm start'



### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a remote MongoDB database URI.
