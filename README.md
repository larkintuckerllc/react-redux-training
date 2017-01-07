# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will re-implement the counter application in React;
along the way introducing several React concepts.

## Setting Up the Project

**Assignment:** Create a new React project following these steps:

1. Duplicate the folder *lesson_4*; naming it *lesson_5*.
2. Using ATOM, edit the *package.json* file in *lesson_5*; rename the
project *lesson_5*.
3. From the *lesson_5* folder, type *npm start* to start the application
in your default browser.

## Laying out the Render Method

**Assignment:** Using ATOM update the *render* method (provided below) in
the file *src/App.js*.

*render method*
```js
render() {
  return (
    <div>
      <div>0</div>
      <button>+</button>
    </div>
  );
}
```

**note**: Remember React components need to return a single component;
thus the extra `<div>`.

## The State

In the previous counter application implementations, the current value
(state) of the counter was stored in the DOM itself (the *counter* element).
One problem with this approach is that interacting with the DOM is slow;
another is that the code is messy with all the DOM commands.

Instead, we will simply keep the state of the counter as a property of the
component; actually wrapped in a property called *state*. This is just
plain old ES2015 classes.

**Assignment:** Using ATOM add the *constructor* (provided below)
immediately after the *class* declaration line in the file *src/App.js*.

*constructor*
```js
constructor() {
  super();
  this.state = {
    counter: 0,
  };
}
```

**Assignment:** Using ATOM update the *render* method (provided below) in
the file *src/App.js*.

*render method*
```js
render() {
  const { counter } = this.state;
  return (
    <div>
      <div>{counter}</div>
      <button>+</button>
    </div>
  );
}
```

First you can that we use object destructuring to assign the counter value
to the *counter* variable.

Additionally, we use the JSX curly brace syntax to indicate to the
transpiler (Babel) that the containing content is JavaScript that is
passed as the child of the element.

*div transpiled*
```js
React.createElement(
  'div',
  null,
  counter
)
```

**note:** Technically the value of counter is an integer (not a string
as we want rendered to the DOM); luckily this environment is forgiving.
Otherwise we would have to use *counter.toString()*.

**Assignment:** In the same *render* method replace `{counter}`
with `{counter === 0 ? 'zero' : counter}`

Illustrates that we can pass in more complex JavaScript. This is an example
of a JavaScript ternary operator that often gets used with React.

## Event Handling

Now, when the user clicks on the increment button we need a way to
handle this.

**Assignment:** In the same *render* method update the *button*
component (provided below).

*button component*
```js
<button
  onClick={() => { window.console.log('CLICKED'); }}
>
  +
</button>
```

**note:** It is very easy to misunderstand what is going on and
think we are doing old-style DOM manipulation.

The proper way to interpret the *onClick* line is:

1. We create JavaScript code that evaluates to a function (the ES2015 style
arrow function).
2. We wrap it in curly braces to tell Babel to evaluate the containing
as JavaScript code; resulting in this case a function.
3. The resultant function then gets passed to the *<button>* component
as the special *onClick* property; more on properties later.
4. The special *onClick* property causes React to attach (and detatch)
*click* event listeners to the created DOM *button* element.

*button transpiled*
```js
React.createElement(
  'button',
  {
    onClick: function onClick() {
      window.console.log('CLICKED');
    }
  },
  '+'
)
```

## Causing Component to Re-render

The inherited *setState* method of a React component will:

1. Set the component's *state* property.
2. Cause the React component to re-render by calling the component's
*render* method.

**Assignment:** Update the button's *onClick* property (provided below);

*onClick property*
```js
onClick={() => { this.setState({ counter: counter + 1 }); }}
```
