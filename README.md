# react-signup-verification-boilerplate

React - Email Sign Up with Verification, Authentication & Forgot Password

Working towards a Node.js Web API

# Last updated

- 02-12-2024

# Functionality of the Web App

- JWT authentication with refresh tokens
- Refresh token rotation
- Revoked token reuse detection
- Email sign up and verification
- Forgot password and reset password functionality
- Role based authorization with two roles "User" and "Admin"
- CRUD Account management routes with role based access control

# Tech used for this Web Client

- Node.js version 14
- Volta for Node Version management
- React is the JS framework for this frontend
- The React Client is hosted at a traditional Webhotel
- Webpack as module bundler, dev and build tool
- VS Code is my developement tool

# Tech used for Web API, DB and Hosting

- Node.js
- Sequelize used to implement the ORM at the Web API
- The Node.js Web API is hosted at Azure App Service
- MySQL as the Database for both Dev + Prod
- CORS Policy implemented by Node.js and at Azure
- JWT Token for access secure routes
- Refresh Token by HTTP only Cookie to generate new JWT Tokens
- VS Code as developement tool

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install by the command promt

# Development server:

- npm run start

- You can view the development server at `localhost:4000`

# Production build:

- npm run build

The production build will be in the folder: dist
