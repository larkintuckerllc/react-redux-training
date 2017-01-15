# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will wrap up the introduction to Redux.

**Assignment:** Create a new React project following these steps:

1. Duplicate the folder *lesson_7*; naming it *lesson_8*.
2. Using ATOM, edit the *package.json* file in *lesson_8*; rename the
project *lesson_8*.
3. From the *lesson_8* folder, type *npm start* to start the application
in your default browser.

## Redux in Action

1. Clicking the button triggers the *setCounter* function that dispatches
the *SET_COUNTER* action with a new value.
2. The reducer function in *counter.js* updates the store.
3. All the *connect* components, e.g., in *App.js* respond to all store
updates by executing the getters and comparing (===) the new value to the
previous value. If any of the values differ, it triggers an update cycle of
the wrapped component, e.g., *App*.

## Redux Developer Tools

**Assignment**: Install the Chrome extension Redux Developer Tools.

Redux Developer Tools allows you to inspect the Redux store.

**Assignment**: Enable Redux Developer Tools in the project updating
*index.js* in *src* (see below).

*index.js*
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './ducks/counter';
import App from './App';

const middlewares = [];
const store = createStore(
  combineReducers({
    counter,
  }),
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

**Assignment**: From Chrome Developer Tools select the Redux tab to inspect
the Redux store.
