const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
};

export const reducer = (state, action) => {
  const newState = state || initialState;

  if (action.type === incrementCountType) {
    return { ...newState, count: newState.count + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...newState, count: newState.count - 1 };
  }

  return newState;
};
