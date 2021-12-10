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

![Dummy Link](https://imgur.com/WAG7B7X)

- Desktop Landing

![Dummy Link](https://imgur.com/zfkg5iE)

- Desktop Hero

![Dummy Link](https://imgur.com/yiMAlwd)

- Resource Index

![Dummy Link](https://imgur.com/yotY1Kp)

- Resource Show

![Dummy Link](https://imgur.com/OijzfZ6)

- Tablet Resource Index

![Dummy Link](https://imgur.com/4TAlG6e)

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

