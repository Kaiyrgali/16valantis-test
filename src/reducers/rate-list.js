const updateRateList = (state, action) => {

  if (state === undefined) {
    return {
      rates: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_RATES_REQUEST':
      return {
        rates: [],
        loading: true,
        error: null,
      };

    case 'FETCH_RATES_SUCCESS':
      return {
        rates: action.payload,
        loading: false,
        error: null,
        };

    case 'FETCH_RATES_FAILURE':
      return {
        rates: [],
        loading: false,
        error: action.payload,
        };

    case 'GET_RATES_ARCHIVE':
      console.log(state) // скорректировать
      return {
        rates: state.rateList.books,
        loading: false,
        error: null,
        }

    default:
      return state.rateList;
  }
};

export default updateRateList;
