# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

This lesson will focus on JavaScript modules; self-contained code that
provides some functionality.

## RequireJS

**note:** We will be using the RequireJS library to illustrate the
concept of modules and then quickly switch to more modern techniques.

**Assignment:** Setup development environment by following the steps:

1. In the *react-redux-training* folder create a folder called *lesson_2.1*.
2. From the command line / terminal in the *lesson_2.1* folder run `npm init`
and accept all default.
3. Run `npm install --save-dev eslint`.
4. Run `node_modules/.bin/eslint --init` using the popular style *Standard*.

**Assignment:** Scaffold the project by following the steps:

1. Using ATOM create the file *index.html* in *lesson_2.1* (provided below).
2. In the *lesson_2.1* folder create a folder called *scripts*.
3. Download the *require.js* file from http://requirejs.org/docs/download.html
into the *scripts* folder.
4. Using ATOM Create the file *main.js* in the *scripts* folder (provided below).
5. Open *index.html* in Chrome and use Chrome Developer Tools to observe
the console output.

*index.html*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>React Redux Training: Lesson 2.1</title>
  </head>
  <body>
    <div id="counter">0</div>
    <button id="increment">+</button>
    <script data-main="scripts/main" src="scripts/require.js"></script>
  </body>
</html>
```

*main.js*
```js
'use strict'
window.console.log('main loaded')
```

**Assignment:** Implement a basic module based application by following steps:

1. Using ATOM add the *globals* property (provided below) to the
*module_exports* object in the file *.eslintrc.js*.
2. Using ATOM create the file *config.js* in *scripts* (provided below).
3. Using ATOM Update *main.js* in *scripts* (provided below).
4. Open *index.html* in Chrome, test increment button, and use Chrome
Developer Tools to observe the console output.

*globals property*
```json
"globals": {
  "requirejs": true,
  "define": true
}
```

*config.js*
```js
'use strict'
define(function () {
  window.console.log('config loaded')
  return {
    start: 0,
    increment: 1
  }
})
```

*main.js*
```js
'use strict'
window.console.log('main loaded')
requirejs(['config'], function (config) {
  window.console.log('my code ran')
  var counterEl = document.getElementById('counter')
  var incrementEl = document.getElementById('increment')
  counterEl.innerHTML = config.start.toString()
  incrementEl.addEventListener('click', function () {
    counterEl.innerHTML = (parseInt(counterEl.innerHTML) + config.increment).toString()
  })
})
```

**Assignment:** Update both the *start* and *increment* to *2* and observe
the application's behavior.

## JavaScript ES2015 Modules

Because the React community has adopted the JavaScript ES2015
standard, we are going to use ES2015 modules going forward. Also, you
will be introduced to ES2015 syntax and concepts along the way; e.g.,
semi-colons are required going forward.

**note:** As most browsers today do not directly support ES2015, we will
be using the Babel tool to transpile it back to ES5.

**Assignment:** Setup development environment by following the steps:

1. In the *react-redux-training* folder create a folder called *lesson_2.2*.
2. From the command line / terminal in the *lesson_2.1* folder run `npm init`
and accept all default.
3. Run `npm install --save-dev eslint`.
4. Run `node_modules/.bin/eslint --init` using the popular style *Airbnb*
without React.
5. Run `npm install --save-dev babel-cli`.
6. Run `npm install --save-dev babel-preset-es2015`.
7. Run `npm install --save-dev browserify`.
8. Using ATOM create the file *.babelrc* in the *lesson_2.2* folder
(provided below).

*.babelrc*
```json
{
  "presets": ["es2015"]
}
```

**Assignment:** Scaffold the project by following the steps:

1. Using ATOM add the *env* property (provided below) to the
*module_exports* object in the file *.eslintrc.js*.
2. In the *lesson_2.2* folder create a folder called *dist*.
3. Using ATOM create the file *index.html* in *dist* (provided below).
4. In the *lesson_2.2* folder create a folder called *src*.
5. Using ATOM create the file *index.js* in *src* (provided below).
6. In the *lesson_2.2* folder create a folder called *tmp*.

*env property*
```json
"env": {
    "browser": true
}
```

*index.html*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>React Redux Training: Lesson 2.2</title>
  </head>
  <body>
    <div id="counter">0</div>
    <button id="increment">+</button>
    <script src="bundle.js"></script>
  </body>
</html>
```

*index.js*
```js
window.console.log('index loaded');
```

**Assignment:** Build the project by following the steps:

1. From the command line / terminal in the *lesson_2.2* folder run
`./node_modules/.bin/babel src -d tmp`.
2. Run `./node_modules/.bin/browserify tmp/index.js -o dist/bundle.js`.
3. Using `cat` or `type` observe the contents of the *index.js* file
in the *src* folder.
4. Observe the contents of the *bundle.js* file in the *dist* folder.
5. Open *index.html* in Chrome and use Chrome Developer Tools to observe
the console output.

**Assignment:** Implement a basic module based application by following steps:

1. Using ATOM create the file *config.js* (provided below) in the *src* folder.
2. Update the *index.js* (provided below).
3. From the command line / terminal in the *lesson_2.2* folder run
`./node_modules/.bin/babel src -d tmp`.
4. Run `./node_modules/.bin/browserify tmp/index.js -o dist/bundle.js`.
5. Open *index.html* in Chrome, test increment button, and use Chrome
Developer Tools to observe the console output.

*config.js*
```js
window.console.log('config loaded');
export default {
  start: 0,
  increment: 1,
};
```

*index.js*
```js
import config from './config';

window.console.log('index loaded');
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
counterEl.innerHTML = config.start.toString();
incrementEl.addEventListener('click', () => {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + config.increment).toString();
});
```

**note:** Notice that we are now required to the use ES2015 *const* concept.
