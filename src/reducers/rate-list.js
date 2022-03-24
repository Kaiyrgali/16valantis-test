const updateRateList = (state, action) => {

  if (state === undefined) {
    return {
      rates: [],
      loading: true,
      error: null,
      archive: null,
      archiveLoading: true,
    };
  }

  switch (action.type) {
    case 'FETCH_RATES_REQUEST':
      return {
        rates: [],
        loading: true,
        error: null,
        archive: null,
        archiveLoading: true,
      };

    case 'FETCH_RATES_SUCCESS':
      return {
        rates: action.payload,
        loading: false,
        error: null,
        archive: null,
        archiveLoading: true,
        };

    case 'FETCH_RATES_FAILURE':
      return {
        rates: [],
        loading: false,
        error: action.payload,
        archive: null,
        archiveLoading: true,
        };

    case 'GET_BOOK_FILTER': // скорректировать
      return {
        rates: state.rateList.books,
        loading: false,
        error: null,
        archive: null, // скорректировать
        archiveLoading: true,
        }

    default:
      return state.rateList;
  }
};

export default updateRateList;
