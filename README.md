# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

In this lesson, we will wrap up Redux and provide next steps.

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

## React Developer Tools
