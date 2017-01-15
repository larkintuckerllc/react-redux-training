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
