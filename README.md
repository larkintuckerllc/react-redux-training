# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will refactor the counter application using stateless
functional components and properties.

## Setting Up the Project

**Assignment:** Create a new React project following these steps:

1. Duplicate the folder *lesson_5*; naming it *lesson_6*.
2. Using ATOM, edit the *package.json* file in *lesson_6*; rename the
project *lesson_6*.
3. From the *lesson_6* folder, type *npm start* to start the application
in your default browser.

## Stateless Functional Component

**Assignment:** Create a file *Counter.js* in the *src* folder with the
following:

*Counter.js*
```js
import React, { PropTypes } from 'react';

const Counter = ({ increment, value }) => (
  <div>
    <div>{value}</div>
    <button
      onClick={increment}
    >
      +
    </button>
  </div>
);
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Counter;
```

This is a simplified, *stateless functional component* way of constructing
a React component. Essentially it is just the *render* method. This component
is passed two properties from the parent component, *increment* and *value*.

With this component, the *App* function is stripped of the DOM specific
implementation details.

**Assignment:** Update *App.js* to as follows:

*App.js*
```js
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <Counter
        increment={() => { this.setState({ counter: counter + 1 }); }}
        value={counter === 0 ? 'zero' : counter.toString()}
      />
    );
  }
}

export default App;
```

Essentially we have stripped all the DOC specific content
from *App.js* and put it into *Counter.js*.

## React Developer Tools

**Assignment:** Install the Chrome extension *React Developer Tools*.

*React Developer Tools* allows you to inspect the state and properties
of a React component.

**Assignment:** From *Chrome Developer Tools* select the *React*
tab to inspect the state and properties of the *App* and *Counter*
components.
