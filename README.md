# nodejs-todo-backend
# NodeJS Todo Backend

This project was built by me while following [Backend Full Course | NodeJS ExpressJS PostgreSQL Prisma & Docker](https://youtu.be/9BD9eK9VqXA?si=WNLBMTg5wE7fwEir) by Smoljames on YouTube.  

I implemented **Chapter 2 and Chapter 3**, learning to:  

- Build REST APIs with Node.js and Express  
- Perform CRUD operations with SQLite  
- Implement JWT authentication  
- Serve a frontend  

## Setup

bash
`git clone https://github.com/Saikiran5604/nodejs-todo-backend.git
cd nodejs-todo-backend/chapter_3`
`npm install`
`npm start`

This repository contains my implementation of Chapter 2 and Chapter 3 from the course:

## What I have completed
- Chapter 2:
- Node.js backend project with basic REST API and CRUD operations.
- Chapter 3:
- Node.js + Express.js backend app with SQLite, JWT authentication, and frontend integration.

-Chapter 2: Installations
`npm install express`
`npm install nodemon --save-dev`

-Chapter 3: Installations
`cd chapter_3`
`npm install express`         # Express.js
`npm install better-sqlite3`  # SQLite database
`npm install jsonwebtoken`    # JWT for authentication
`npm install bcrypt`          # Password hashing
`npm install nodemon --save-dev`   # Dev dependency for auto-reloading

## How to run
1. `cd chapter_2` or `cd chapter_3`  
2. `npm install`  
3. `npm run dev`
4. download REST CLIENT extension
   
##Chapter-2 - "A simple Back-end Server" 
Setting up the Server 
Learning about the api end points and website points 
Just trying CRUD operations from the backend showing the response on the web 
return the Html page to the browser from the backend 

##Chapter 3 – "A full stack todo application that uses a Nodejs backend , a SQLITE database and jwt authentiation"
In this chapter, we build a full backend for a Todo app with the following features:

“Summary of Chapter 3 backend work provided by ChatGPT (OpenAI, 2025).”
1.Express.js Server
Sets up a backend server to handle HTTP requests.
Defines routes for authentication and todos (/auth and /todos).

2.SQLite Database
Stores users and their todos persistently.
Uses better-sqlite3 for database operations.
Supports CRUD operations (Create, Read, Update, Delete) for todos.

3.JWT Authentication
Registers and logs in users.
Generates a token on successful login/registration.
Protects the /todos routes so only authenticated users can access their tasks.

4.Frontend Integration
Serves a simple frontend (index.html) for the Todo app.
Uses localStorage to store JWT tokens in the browser.
Handles login, signup, adding, updating, and deleting todos.

5.Routing & Middleware
authRoutes.js → handles login/register routes.
todoRoutes.js → handles CRUD for todos.
authMiddleware.js → verifies JWT tokens for protected routes.

6.Key Workflow
User registers → token is created → user can access todos.
User logs in → token is validated → user sees their todos.
Token stored in localStorage → used for all protected requests.

we can test the working of this Todo app :
I prefer to test it with REST CLIENT extension 
Intitial we need to signup with an username(email) and password Hence we get an token issued for it 
Then if with same credentials we are able to login  ( one more token will be generated -The token will be when we need to add todo-list to users )
For every user there is a default todo list called "Hello :) Add your first todo" then we can try fetch all the todo-list of a token by giving their token (Authorization)
we can create new todo-list ,update ,delete by providing the user token 

Another way is simple you can do it in browser itself 
the token are stored in local storage (you can check right-click->inspect->application->local-storage)


