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
![Landing Page](https://user-images.githubusercontent.com/87200663/145638748-ecf5f8c5-88a8-410f-a7bf-67e4d704dc5d.png)

 User Log In
 ![Log In](https://user-images.githubusercontent.com/87200663/145638796-f9931db5-4854-4c06-bdbb-7d3aa0dba47a.png)
 
 User Create Account
![Register](https://user-images.githubusercontent.com/87200663/145638873-c13190a3-83f4-442e-b994-ba061d5d2642.png)

Layout
![Layout](https://user-images.githubusercontent.com/87200663/145639031-61d21b64-d1e9-47f2-80ec-003f8452f763.png)

User Home Page
![Home Page](https://user-images.githubusercontent.com/87200663/145638989-c3c94183-cbf5-4f51-b76e-8d6a506f62a0.png)

User Recipes
![All One Users Recipes](https://user-images.githubusercontent.com/87200663/145639203-f0c21f75-74d0-4b89-92c6-cf3ee1f1cfeb.png)

Search Recipes
![Search](https://user-images.githubusercontent.com/87200663/145639234-cc924d70-ad7b-43dd-a8cc-5c4bb19e185c.png)

View Single Recipe
![View Single Recipe](https://user-images.githubusercontent.com/87200663/145639272-aa0b0b5d-8310-4e3e-9606-4c436aa419ce.png)

Edit Recipe
![Edit Existing Recipe](https://user-images.githubusercontent.com/87200663/145639342-a8fd1b1f-c744-4c50-b8bb-425289537ec5.png)

Create New Recipe
![Add New Recipe](https://user-images.githubusercontent.com/87200663/145639442-2397e941-b993-43cb-a1a1-dc7644a8cff9.png)

View All Users
![View All Users](https://user-images.githubusercontent.com/87200663/145639492-16582ae6-b692-4d47-a671-3f796fed6c06.png)



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
| Develop Project Pitch    |    H     |     5 hrs      |     8 hrs     |    8 hrs    |
| Project Pitch + Approval |    H     |     15 min      |     30 min     |     30 min     |
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

![Foodies App ERD MVP](https://user-images.githubusercontent.com/87200663/145647089-0724e357-b473-4382-aab1-02be85e0b3db.png)


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

