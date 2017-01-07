import React, { Component } from 'react';

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
      <div>
        <div>{counter === 0 ? 'zero' : counter}</div>
        <button
          onClick={() => { this.setState({ counter: counter + 1 }); }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
