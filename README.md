# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will build a React "Hello World" application and do
a deep dive into how it is built.

## Setting Up the Project

**Assignment:** Create a new React project following these steps:

1. From the command line / terminal in the *react-redux-training* folder
type `create-react-app lesson_4`.
2. Using ATOM add the *eslint object* to the root object in the *package.json*
file (see below).
3. From the *lesson_4* folder, type *npm start* to start the application
in your default browser.

*eslintConfig object*
```json
"eslintConfig": {
  "extends": "react-app"
}
```

**Assignment:** Convert the project to a simple "Hello World" app by following
these steps:

1. Using ATOM replace the *render* method (see below) in the
*lesson_4/src/App.js* file.
2. In the same *App.js* file delete the line `import logo from './logo.svg';`.
3. In the same *App.js* file delete the line `import './App.css';` and save
the file.
4. Using ATOM with the file *lesson_4/src/index.js* delete the line
`import './index.css'` and save the file.
5. Delete the files *App.css*, *App.test.js*, *index.css*, and *logo.svg*.

*render method*
```js
render() {
  return (
    <div>Hello World</div>
  );
}
```

## Production Build

Before getting to reviewing the code, we will step aside to see how we
put this project into production.

**Assignment:** From the command line / terminal in the *lesson_4* folder
type `npm run build`.

**Assignment:** Observe the contents of the created *build* folder. You
will see that it is much like the *dist* folder that we created in
an earlier lesson.

To put this into production put the contents of the *build*
folder on a web server.

## Static Assets

The projects static assets are stored in the project's *public* folder;
this includes the HTML file that gets injected with the bundled
resources (this is much like the *index.html* and *bundle.js* that we
created in an earlier lesson.

## The *index.js* File

The first project file we will look at in detail is *src/index.js*; much
like our earlier lesson this file is the entry point for our application with
all other resources being referenced from it.

```js
import React from 'react';
```

As we have seen previously, this line will import the functionality of the
React package into the `React` object. This object is used implicitly
by the JSX code (explained below).

```js
import ReactDOM from 'react-dom';
```

The `ReactDOM` object is explicitly used in the code and is used to
provide the integration of React to the DOM. The React package can be
used with other integrations, e.g. React Native (for Android and iOS).

```js
import App from './App';
```

The *App* object is a React component that will will use to provide
the functionality of our application (more on this later).

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

This group of lines takes any rendered HTML output of an instance of a *App*
object and inserts it into the DOM object with the id of *root*; think of
the *innerHTML* function we used in an earlier lesson.

The unusual XML markup (called JSX) is simply shorthand notation for specific
React methods that is transpiled into JavaScript by Babel, e.g., *<App />*
shorthand for:

```js
React.createElement(App, null, null);
```

*note:* While JSX looks like HTML (which ends up being very handy),
it is important to keep in the back of your mind that it is not.

## The *App.js* File

The *App.js* file creates a React component; the key concept in understanding
React.  As a matter of fact, the all the code going forward is simply a
tree of React components.

This React component is created using the ES2015 *class* concept; much
like classes in other object oriented languages.

```js
import React, { Component } from 'react';
```

This import introduces another ES2015 concept, object destructuring, e.g.,
in the following code the value of *b* is the string *'banana'*.

```js
const o = {
  a: 'apple',
  b: 'banana',
};
const { b } = o;
```

```js
class App extends Component {
```

This is the ES2016 *class* declaration that creates a new class *App*
that extends the functionality of the *Component* class.

```js
  render() {
    return (
      <div>Hello World</div>
    );
  }
```

The only method that you have to override in a React component is the
*render* method. The render method is required to return a single
React component.

In this specific case, it returns the component created by
`<div>Hello World</div>` which is shorthand for:

```js
React.createElement('div', null, 'Hello World');
```

React interprets this special case as, create a DOM element of type *div* with
*innerHTML* of *'Hello World'* and insert it into the DOM. The related, but
less obvious behavior, is that this component will remove the *div*
element from the DOM when it the component is unmounted (explained later
when we discuss the component lifecycle).

As you can see, it is hard not to interpret this JSX as simply HTML.

```js
export default App;
```

Like an earlier lesson, this exports the *App* class to be used
by the *index.js* code above.
