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
