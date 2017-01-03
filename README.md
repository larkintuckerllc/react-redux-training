# React / Redux Training

This branch is one lesson in a series of lessons to supplement a six hour
in-class React / Redux training course; switch to the *master* branch
to start the series.

This lesson will focus on the React specific development environment.

## Webpack

As we saw in the previous lesson, there were quite a few development
dependencies (and a bunch of commands) to build a simple modern web
application. At the same time, we have not even introduced the myriad
of CSS specific dependencies, e.g., SASS, etc.

The React community has settled on Webpack as the preferred tool
to do the module loading (much like Browserify did) and
orchestrate all the other build tools, e.g., Babel.

The challenge, however, is that an fully functional Webpack configuration
can be a bit overwhelming.

**Assignment:** Review the *package.json* and *webpack.config.js* files
in an example React application.

https://bitbucket.org/sign_age/react-redux-boilerplate/src

## Create React App

Luckily the folks at Facebook have developed *Create React App* to
provide you a fully functional React development environment that
hides all the aforementioned complexities. You can go quite far in
developing React web applications with this approach.

**Assignment:** Setup the development environment, scaffold the
project, and build it by following the steps:

1. From the command line / terminal in any folder, type
`sudo npm install -g create-react-app`.
2. From in the *react-redux-training* folder, type
`create-react-app lesson_3`.
3. From in the *lesson_3* folder, type `npm start`.
4. Your browser should automatically launch and open the url,
http://localhost:3000/

**Assignment:** Observe the projects development dependencies by using
`cat` or `type` on the file `lesson_3/package.json`. You will notice that
it depends on *react-scripts*.

**Assignment:** Observe the development dependencies in the *react-scripts*
package by using `cat` or `type` on the file
`lesson_3/node_modules/react-scripts/package.json`. You will notice
some of the dependencies that we learned previously, e.g., *eslint*
and *babel*.

**Assignment:** Using ATOM open the file `lesson_3/src/App.js` and
type in a nonsense line and save. While the ATOM linter functionality
no longer works (there is no *.eslintrc.js* file in project folder),
the browser automatically will display the linting warnings / errors.

**Assignment:** Follow the work-around provided to enable ATOM linting
functionality and confirm that the functionality is restored.

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor

**Assignment:** To enable JSX highlighting and auto-completion in ATOM, follow
these steps:

1. Run the command from any folder `apm install react`.
2. From the *ATOM Edit > Preferences > Packages* menu, enable the installed
ATOM package.
