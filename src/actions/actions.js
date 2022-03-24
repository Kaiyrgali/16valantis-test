const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error,
});

export const getFilter = (newValue) => ({
  type: 'GET_BOOK_FILTER',
  payload: newValue,
});
export const getRaiting = (newValue) => ({
  type: 'GET_BOOK_RAITING',
  payload: newValue,
});

export const getPrice = (newValue) => ({
  type: 'GET_BOOK_PRICE',
  payload: newValue,
});

export const gotoPage = (page) => ({
  type: 'GET_BOOK_PAGE',
  payload: page,
});

const fetchRates = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getDailyRates()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchRates,
};
