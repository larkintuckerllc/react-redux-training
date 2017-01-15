# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will replace the state with the Redux store.

## Setting Up the Project

**Assignment:** Create a new React project following these steps:

1. Duplicate the folder *lesson_6*; naming it *lesson_7*.
2. Using ATOM, edit the *package.json* file in *lesson_7*; rename the
project *lesson_7*.
3. From the *lesson_7* folder, type *npm start* to start the application
in your default browser.

## Redux Theory

One pattern with React is that properties are passed down the component
chain (which mirrors the DOM hierarchy). The implication of this, is that
state that is used by multiple components needs to be defined in a
common ancestor component.

Because of this, many React applications end up defining much of their
state in components high in the hierarchy. This approach rapidly becomes
tedious (repetitively passing down properties).

Redux (an implementation of the Flux pattern) solves this by storing the
state in a central store that any component can directly access.

## Redux Implementation

**Assignment:** Install Redux dependencies into project by typing
`npm install --save redux react-redux` in the *solution_7* folder.

**Assignment:** Create a counter state in the Redux store and integrate
it into the application by following the steps:

1. Create a folder named *ducks* in *src*.
2. Create a file named *counter.js* in *ducks* (see below).
3. Update *index.js* in *src* (see below).

*counter.js*
```js
const SET_COUNTER = 'SET_COUNTER';
// REDUCERS
export default (state = 0, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.value;
    default:
      return state;
  }
};
// SELECTORS
export const getCounter = state => state.counter;
// ACTION CREATORS
export const setCounter = value => ({
  type: SET_COUNTER,
  value,
});
```

*index.js*
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './ducks/counter';
import App from './App';

const store = createStore(
  combineReducers({
    counter,
  })
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

As this point, we have a way to store the counter state with Redux;
now we need to replace the React state with Redux in the
*App.js* component.

**Assignment** Update *App.js* in *src* (see below).

*App.js*
```js
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromCounter from './ducks/counter';
import Counter from './Counter';

class App extends Component {
  render() {
    const { counter, setCounter } = this.props;
    return (
      <Counter
        increment={() => { setCounter(counter + 1) }}
        value={counter === 0 ? 'zero' : counter.toString()}
      />
    );
  }
}
App.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
}
export default connect(
  state => ({
    counter: fromCounter.getCounter(state),
  }),
  {
    setCounter: fromCounter.setCounter,
  }
)(App);
```
