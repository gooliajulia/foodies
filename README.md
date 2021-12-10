# Foodies App
This is a student project for General Assembly bootcamp. It is a full stack app where a user can organize their recipes and connect with other users for recipe inspiration.


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Foodies** is a full stack web app for users to organize all of their favorite recipes and meal plans, as well as connect with and follow other users for endless meal time inspiration. The layout structure of the app is inspired by Spotify's interface.


<br>

## MVP


<br>

_The **Foodies** MVP will be the basic foundation for this app to grow more complex with time. It will allow a user to register, and log in and out of their personal account. While logged into their account they will be able to create, view, edit and delete their own receipes._

<br>

## Goals

<br>

### Back End / Server
- _Build a Ruby on Rails server, exposing RESTful JSON endpoints_
- _Build a database with at least 2 tables and at least one association between tables._
- _Uitlize Rails to define models for interacting with the database_
- _Implement Full CRUD via working generic controller methods (index, show, create, update, delete)_
- _Back End deployed via Heroku_


<br>

### Front End / Client
- _Build a functional and interactive React app having at least 8 separate, rendered components  in an organized React file structure_
- _Consume data from Ruby on Rails API (Back End) and render that data in components on Front End_
- _Utilize React Router for client-side routing_
- _Demonstrate Full CRUD actions (index, show, create, update, delete) on the front end_
- _Fully functional Front End deployed via Surge or Netlify_

<br>

### Miscellanous

- _Implement media queries for responsive design on 3 screen sizes including desktop_
- _All code is written in a clean and readable manner utilizing high-quality semantic variable names, proper indentation and appropriate case conventions_



<br>

### Libraries and Dependencies

<br>

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _JS open-source library used to create the single page client facing interface of the app_ |
|   React Router   | _Library allowing navigation and views of React components for an intuitive User Experience_ |
| Ruby on Rails | _Framework used to create app's database on the Back End according the the Model-View-Controller (MVC) pattern_ |
|     Axios      | _JS Library used to make requests from front end to database on backend_ |
|  Faker  | _Library used to generate fake data for seed file such as names, email addresses, food, etc._ |
| Bcrypt  | _A hashing function that helps to create secure password storing_ |
|  JWT  | _Provides JSON Web Token middleware for authentication purposes_ |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/l0XKgNHkM2WLHurGWcvPZt/Untitled?node-id=0%3A1

 Desktop Landing Page
![Landing Page](https://user-images.githubusercontent.com/87200663/145518481-433d87a9-0673-4198-8a47-675829766050.png)

 User Create Account
![Register](https://user-images.githubusercontent.com/87200663/145518591-4f2e9738-536c-418a-b1a0-c7283824bcb3.png)

 User Log In
![Log In](https://user-images.githubusercontent.com/87200663/145518618-efc3a9d7-58ea-4e0f-8bc8-4a7a9580287d.png)

 Layout Component for all pages
![Layout](https://user-images.githubusercontent.com/87200663/145518632-c0da910b-a686-4741-bb10-cf98f7e5fcc1.png)

 User Home Page
![Home Page](https://user-images.githubusercontent.com/87200663/145518645-b8a8b075-86fb-4816-9d14-61d04f1211b1.png)

 User Recipes List
![All My Recipes](https://user-images.githubusercontent.com/87200663/145518659-c65d306b-d95a-4ce0-8924-17e13f023bd7.png)

 Search Screen
![Search](https://user-images.githubusercontent.com/87200663/145518670-08ed8bca-e67a-46d1-8cca-34a06726e183.png)

 Single Meal Plan Screen
![Single Meal Plan](https://user-images.githubusercontent.com/87200663/145518677-e1ce7aac-01b9-4be8-9127-b45156d9c3a2.png)



#### Component Tree

![Foodies App Component Tree - MVP](https://user-images.githubusercontent.com/87200663/145629146-ff0b735e-3018-4120-a41b-8b09033b6f93.png)

https://www.figma.com/file/LS0zMmvmhAzhwrxbNYHfRw/Foodies-App-Component-Tree?node-id=0%3A1


#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ icons
      |__ color_palletes
|__ components/
      |__ Nav.jsx
      |__ UsersThumbnailList.jsx
      |__ RecipesThumbnailList.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Landing.jsx
      |__ LogIn.jsx
      |__ CreateAccount.jsx
      |__ Home.jsx
      |__ UserRecipes.jsx
      |__ CreateRecipe.jsx
      |__ RecipeDetail.jsx
      |__ EditRecipe.jsx
      |__ Recipes.jsx
      |__ Users.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ recipes.js
      |__ users.js
|__ utils/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Develop Project Pitch    |    H     |     5 hrs      |     8 hrs     |    TBD    |
| Project Pitch + Approval |    H     |     15 min      |     0     |     TBD     |
| Create new Rails App    |    H     |     30 min      |     0     |    TBD    |
| Create Rails Database |    H     |     15 min      |     0      |     TBD     |
| Scaffold Resources    |    H     |     30 min      |     0     |    TBD    |
| Create Join Table |    H     |     15 min      |     0      |     TBD     |
| Check Models, Controllers + Routes    |    H     |     2 hrs      |     0     |    TBD    |
| Add Dependencies (Bcrypt, JWT, CORS, Faker, Axios, React-router-dom@5.3.0) |    M     |     45 min      |     0      |     TBD     |
| Write Seed File    |    H     |     1 hr       |     0     |    TBD    |
| Establish Authentication |    H     |     1 hr      |     0      |     TBD     |
| Test endpoints with Postman    |    H     |     1 hr      |     0     |    TBD    |
| Create React App |    H     |     30 min      |     0      |     TBD     |
| Create Front End File Structure    |    H     |     45 min      |     0     |    TBD    |
| Create Landing Page |    H     |     1 hr      |     0      |     TBD     |
| Landing Page Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create Login + Create Account Screens    |    H     |     2 hrs      |     0     |    TBD    |
| LogIn + CreateAccount Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create Layout Screen    |    H     |     4 hrs      |     0     |    TBD    |
| Layout Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create User Home Screen Basic |    H     |     3 hrs      |     0      |     TBD     |
| User Home Screen Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create User Recipes Screen |    H     |     2 hrs      |     0      |     TBD     |
| User Recipes Screen Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create Create Recipe Screen    |    H     |     2 hrs      |     0     |    TBD    |
| Create Recipe Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create Recipe Detail Screen |    H     |     2 hrs      |     0      |     TBD     |
| Recipe Detail Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create Recipe Edit Screen |    H     |     3 hrs      |     0      |     TBD     |
| Recipe Edit Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| Create All Users Recipes Screen    |    H     |     2 hrs      |     0     |    TBD    |
| All Users Recipes Basic CSS |    H     |     1 hr      |     0      |     TBD     |
| TOTAL               |          |     43 hrs 45 min      |     8 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Foodies App ERD - MVP](https://user-images.githubusercontent.com/87200663/145628976-7a312734-4ae5-47ce-8f31-32995263ad3b.png)


https://drive.google.com/file/d/1e7eKmuwdzfcIXd8C9cX0JvsEJt8cozEI/view?usp=sharing
<br>

***

## Post-MVP

- Add association that allows users to like other user's recipes
- Add ingredients resource associated many to many with recipes
- Add nutritional benefits resource associated with ingredients
- Associate ingredients with users as many to many to mimic "pantry" or "fridge" contents
- All users to make "meal plan's" a combination of meals and snacks for a day
- Add a feed of other user's recently made/eaten recipes
- quiz functionality to help a user decide what to eat
- logic that filters recipes for users based on current items in their pantry
- Add logic that reccomends meals based on a users mood/state (taking into consideration nutritional benefits of the recipes via its ingredients)
- Add a timeline feature to footer that tracks time, meals already eaten today, and upcoming meals
- Reminders at certain times to remind a user to prep, snack or eat a meal


***

## Code Showcase

TBD - Post MVP Completion

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

TBD - Post MVP Completion

> Use this section to list of all major issues encountered and their resolution.

