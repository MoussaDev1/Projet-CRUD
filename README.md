
# Information on the Project

This project is a simple API that allows users to perform CRUD (Create, Read, Update, Delete) operations in a message posting application. Users can post a message along with their username and manage their messages through the API.

## Features
- **Create**: Post a new message with a username and message content.
- **Read**: Retrieve all posted messages or a specific message.
- **Update**: Modify an existing message.
- **Delete**: Remove a message from the application.

## Technologies

### Back-end
- **Node.js** with **Express**: To handle server-side logic and routing.
- **MongoDB**: For database management and storing messages.

### Front-end
- **HTML** and **CSS**: Basic interface for interacting with the API.

## Project Structure

The API is built to handle the following HTTP methods:
- `POST`: Add a new message.
- `GET`: Retrieve messages.
- `PUT`: Update an existing message.
- `DELETE`: Remove a message.

## Prerequisites
- Install [Node.js](https://nodejs.org/) (includes npm).
- Install [MongoDB Compass](https://www.mongodb.com/products/tools/compass) for local MongoDB management.
- Create a database on [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) (You can create your first one for free).
- Copy the MongoDB Atlas connection URI and paste it into MongoDB Compass (also update the URI in the **.env** file of the project).

## Installation

1. Initialize the project and install dependencies:
   ```bash
   npm init -y
   npm install express dotenv mongoose nodemon

2. Run the server
   ```bash
   npm run server

## Command Explanations
- **`npm init -y`**: Initializes a new npm project with a `package.json` file using default values.
- **`npm install express dotenv mongoose nodemon`**: Installs the necessary dependencies:
  - **`express`**: A minimal framework for handling routes and server logic.
  - **`dotenv`**: Manages environment variables.
  - **`mongoose`**: A tool for interacting with MongoDB.
  - **`nodemon`**: Automatically restarts the server when changes are made.

