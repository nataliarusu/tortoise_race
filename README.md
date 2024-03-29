## Introduction

---

This Tortoise Race game was built as part of required projects for application to Founders And Coders.\
The project is a race between multiple tortoises which move from one side of the screen to the other.
A user can start a race, see the race results, add new tortoise racer, change their name, color and speed.
See in action https://nataliarusu.github.io/tortoise_race/

## The game instructions

---

- Start the game \
  Click the button 'Start'

- View and change a tortoise name, color and speed \
  Click the tortoise you interested on.
  This will open a modal that shows tortoise properties and availability to change them.\
  Note, that you can't change a tortoise properties while the race is in progress.

- Game result display\
  After the game is finished the result will be displayed on the screen.
  The tortoises' speed will be randomized automatically.

- Create a new tortoise \
  the name should be at least 2 characters long, \
  the color should be the valid color the browser supports with formats (color names, rgb, hex, hsl), \
  the speed range is 1 to 10

## Technical

---

The game is built using HTML, CSS and JavaScript.

The main index.js is the external script that has type module.  
In the index.html

```
 <script src="./index.js" defer type="module"></script>
```

Exporting module features and importing features is done by using import and export declarations. \
Modules where used for maintainability, reusability and to avoid name conflict. \
The start game function calls built in browser setInterval() function to execute the race. \
Each tortoise is an instance of Tortoise functional constructor.

## How to run

---

Clone github project to your local folder using command \
`git clone https://github.com/nataliarusu/tortoise_race.git`

To run the project use a server because JavaScript module syntax was used in this project.

- To run the project using VScode:

  Open the project in VScode and click to 'Go Live' from the status bar to turn the server on/off _OR_ right click on a HTML file from Explorer Window and click on Open with Live Server

- To run from command line:

  - install [Node.js](https://nodejs.org/en/) and install [npm](https://www.npmjs.com/)
  - run command
    > npm install --global serve
  - ater serve installed run command
    > serve

  Now your local directory is hosted in localhost. Open in your browser suggested url. Usually it defaults to http://localhost:3000

  **serve** is a NPM package that converts your current working directory into an virtual directory i.e. the directory is hosted under localhost.

## Functions

---

`renderTortoise()` calls `tortoise.render()` method and creates new line for tortoise in the field.

`startGame()` updates the field's right position and runs `setInterval()` which will run every 100ms.
While setInterval is running, each `tortoise.move()` method is called until the turtle's right position matches the field's right position.

`tortoise.move()` method changes tortoise's left position by adding speed value to the current left position.
When all tortoises' right position is equal to the field's right position `clearInterval()` triggers.

`finishGame()` displays the result of the race in the modal. The close button's event listener handler function resets
all tortoises position, randomize tortoises' speed, and activates the start button, so a new game could be started.

`changeProperties()` displays a form with tortoise's properties that could be changed.

`saveChanges()` function calls different validate functions to validate inputs value. If the values are valid it calls tortoise methods to set the new values to tortoise object.

---

In this project, I did not handle the case of many turtles having the same speed.
