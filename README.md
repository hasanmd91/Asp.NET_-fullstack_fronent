# Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)

This project requires implementation of TypeScript and SASS.

# E-commerce store ILH

## Technologies

| **Category**                         | **Libraries and Tools**                                       |
| ------------------------------------ | ------------------------------------------------------------- |
| **Frontend Framework and Libraries** | TypeScript, React, React Router, React Slick, React Hook Form |
| **State Management**                 | Redux Toolkit, React-Redux, Redux-persist                     |
| **User Interface and Styling**       | Material UI, Material Icons                                   |
| **HTTP Requests**                    | Axios                                                         |
| **Form Validation**                  | Yup                                                           |
| **Testing**                          | Jest, MSW (Mock Service Worker)                               |

## Api Reference

Platzi Fake Store API

[https://fakeapi.platzi.com/](https://fakeapi.platzi.com/)

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

[LIVE DEMO](https://ilhstore.netlify.app/)

## Folder Structure

```
|───public
│ └───assets
└───src
├───components
│ ├───AdminDataCard
│ ├───card
│ ├───cartCalculator
│ ├───CartIcon
│ ├───CartItem
│ ├───CenterContainer
│ ├───FilterBar
│ │ ├───CategoryFilter
│ │ ├───FilterByName
│ │ └───FilterByprice
│ ├───ImageSlider
│ ├───InputSelect
│ ├───Link
│ ├───LoginForm
│ ├───Logo
│ ├───Modal
│ ├───Navbar
│ │ ├───HamburgerMenu
│ │ ├───NavigationBar
│ │ └───TooltipMenu
│ ├───NewProductForm
│ ├───Pagination
│ ├───ProfileComp
│ ├───TextField
│ └───UserRegisterForm
├───Hooks
├───pages
├───redux
│ ├───methods
│ └───reducers
├───shared
├───test
│ ├───Data
│ ├───Reducers
│ └───server
├───tests
│ ├───mockApi
│ └───Reducers
├───types
├───utils
└───Validation
```

## Features Done

- [x] Fetch and display all and single products.
- [x] Create at least 4 pages (products, profile, user, cart)
- [x] Product reducer
- [x] User reducer
- [x] Cart reducer
- [x] Adding and removing from the cart
- [x] Login and authorization (admins can delete and update products)
- [x] Routing and private pages
- [x] Testing the reducers
- [x] Rewrite the README, deploy the project, add the deployment link here and to the README.md
- [x] Pagination when fetching and displaying.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
