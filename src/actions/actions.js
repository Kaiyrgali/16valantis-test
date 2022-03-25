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

const archiveRequested = () => ({
  type: 'FETCH_ARCHIVE_REQUEST',
});

const archiveLoaded = (archive) => ({
  type: 'FETCH_ARCHIVE_SUCCESS',
  payload: archive,
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
    // const data = ;
    // .then(()=>(const data = Object.values(parseData.Valute)))
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const fetchArchive = (ratestoreService) => (data, valuteId) => (dispatch) => {
  // console.log('ratestoreService', ratestoreService);
  // console.log(data);
  dispatch(archiveRequested());
  ratestoreService.getArchiveRates(data, valuteId)
    .then((newData) => dispatch(archiveLoaded(newData)))
    // .catch((err) => dispatch(booksError(err)));
};


export {
  fetchRates,
  fetchArchive
};
