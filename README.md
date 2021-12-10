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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

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

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

- Desktop Landing Page
![Landing Page](https://user-images.githubusercontent.com/87200663/145518481-433d87a9-0673-4198-8a47-675829766050.png)

- User Create Account
![Register](https://user-images.githubusercontent.com/87200663/145518591-4f2e9738-536c-418a-b1a0-c7283824bcb3.png)

- User Log In
![Log In](https://user-images.githubusercontent.com/87200663/145518618-efc3a9d7-58ea-4e0f-8bc8-4a7a9580287d.png)

- Layout Component for all pages
![Layout](https://user-images.githubusercontent.com/87200663/145518632-c0da910b-a686-4741-bb10-cf98f7e5fcc1.png)

- User Home Page
![Home Page](https://user-images.githubusercontent.com/87200663/145518645-b8a8b075-86fb-4816-9d14-61d04f1211b1.png)

- User Recipes List
![All My Recipes](https://user-images.githubusercontent.com/87200663/145518659-c65d306b-d95a-4ce0-8924-17e13f023bd7.png)

- Search Screen
![Search](https://user-images.githubusercontent.com/87200663/145518670-08ed8bca-e67a-46d1-8cca-34a06726e183.png)

- Single Meal Plan Screen
![Single Meal Plan](https://user-images.githubusercontent.com/87200663/145518677-e1ce7aac-01b9-4be8-9127-b45156d9c3a2.png)



- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

