# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

This lesson will focus on installing and getting up and running with
various development tools.

In this and future lessons, the solution can be download from the lesson
(branch) page and installed with the command `npm install` from the command
line / terminal in the package folder, e.g,. in this case *lesson_1*.

## Chrome Browser

While there are a number of browsers available, for the sake of consistency
we will use the Chrome browser throughout this training course.

**Assignment:** Install Chrome browser from:

https://www.google.com/chrome/browser/desktop/

## ATOM Text Editor

While you may favor a particular text editor, for the sake of consistency
we will use the ATOM text editor throughout this training course.

**Assignment:** Install the ATOM text editor from:

https://atom.io/

**Assignment:** Follow the steps:

1. Create a folder called *react-redux-training*.
2. Create a sub-folder called *lesson_1*.
3. Using ATOM create the files *index.html* and *index.js* in the
folder *lesson_1* (provided below).
4. Open *index.html* in Chrome browser.
5. Open Chrome *Developer tools*.

*index.html*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>React Redux Training: Lesson 1</title>
  </head>
  <body>
    <div id="counter">0</div>
    <button id="increment">+</button>
    <script src="index.js"></script>
  </body>
</html>
```

*index.js*
```js
(function () {
  'use strict'
  var counterEl = document.getElementById('counter')
  var incrementEl = document.getElementById('increment')
  incrementEl.addEventListener('click', function () {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML) + 1).toString()
  })
  // This is a nonsense line
})()
```

**note:** This example relies on the *automatic semi-colon insertion*
feature of JavaScript to appease the linter configuration (later).

## Node.js

While we are developing the client-side of web applications, we need
the *Node.js* JavaScript runtime environment for the development
environment.

**Assignment:** Install Node.js from:

https://nodejs.org/en/

**Assignment:**  Follow the steps:

1. From the command line / terminal in the *lesson_1* run the command
`npm init` to begin creating the *package.json* file for this lesson.
2. Accept all the defaults to create the file.

## ESLint

ESLint is a tool designed to flag errors / warning in JavaScript files.

**Assignment:** Follow the *Local Installation and Usage* instructions
to install and run it against the *index.js* file you created from:

http://eslint.org/docs/user-guide/getting-started

**note:** Here and unless otherwise stated, *npm* commands are run from
the package folder, e.g., in this case *lesson_1*. Also, instructions
are often written with Linux / MacOS in mind; use the backslash to
delimit folders in the case of Windows.

**note:** Follow the instructions to use the *Standard*
JavaScript style guide.

**Assignment:** Display, e.g., `cat` or `type`, the *package.json* file
to observe the added development dependencies under *devDependencies*.

**Assignment:** Display the *.eslintrc.js* file to observe the ESLint
configuration.

**Assignment:** Observe the contents of the *node_modules* folder.  This
folder contains all the installed Node.js packages for this project;
most of these are dependencies of the *eslint* package that you installed.

## ATOM ESLint Configuration

ESLint can be run automatically (as you type) in ATOM with the use of
ATOM packages.

**Assignment:**  Follow the steps:

1. From the command line / terminal (any folder) type the command
`apm install linter`.
2. Also, type the the command `apm install linter-eslint`.
3. From the ATOM *Edit > Preferences > Packages* menu, enable the two
installed ATOM packages.
4. Confirm that the ATOM ESLint configuration is working by typing in
some nonsensical line into the *index.js* file. Comment out the
offending line to verify that the error message goes away.
