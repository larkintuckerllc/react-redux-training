# React / Redux Training

## Introduction

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

This lesson will focus on installing and getting up and running with
various development tools.

### Chrome Browser

While there are a number of browsers available, for the sake of consistency
we will use the Chrome browser throughout this training course.

**Assignment:** Install Chrome browser from:

https://www.google.com/chrome/browser/desktop/

### ATOM Text Editor

While you may favor a particular text editor, for the sake of consistency
we will use ATOM text editor throughout this training course.

**Assignment:** Install the ATOM text editor from:

https://atom.io/

**Assignment:**

1. Create a folder called *react-redux-training*.
2. Create a sub-folder called *lesson_1*.
3. Using ATOM create the files *index.html* and *index.js* in the
folder *lesson_1* (provided below).
4. Open *index.html* in Chrome browser.
5. Open Chrome *Developer tools*.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>React Redux Training: Lesson 1</title>
  </head>
  <body>
    <p>Lesson 1</p>
    <script src="index.js"></script>
  </body>
</html>
```

```js
(function() {
  'use strict';
  window.console.log('Hello Lesson 1');
})();
```
