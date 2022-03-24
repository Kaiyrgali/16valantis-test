const booksRequested = () => ({
  type: 'FETCH_RATES_REQUEST',
});

const booksLoaded = (newBooks) => ({
  type: 'FETCH_RATES_SUCCESS',
  payload: newBooks,
});

const booksError = (error) => ({
  type: 'FETCH_RATES_FAILURE',
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

const fetchRates = (ratestoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  ratestoreService.getDailyRates()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchRates,
};
