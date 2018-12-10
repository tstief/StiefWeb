const requestBooksType = 'REQUEST_BOOKS';
const receiveBooksType = 'RECEIVE_BOOKS';
const initialState = { books: [], isLoading: false };

export const actionCreators = {
  requestBooks: () => async (dispatch) => {
    dispatch({ type: requestBooksType });

    const url = 'api/books';
    const response = await fetch(url);
    const books = await response.json();

    dispatch({ type: receiveBooksType, books });
  },
};

export const reducer = (state, action) => {
  const newState = state || initialState;

  if (action.type === requestBooksType) {
    return {
      ...newState,
      isLoading: true,
    };
  }

  if (action.type === receiveBooksType) {
    return {
      ...newState,
      books: action.books,
      isLoading: false,
    };
  }

  return newState;
};
