const updateRateList = (state, action) => {

  if (state === undefined) {
    return {
      rates: [],
      loading: true,
      error: null,
      archives: [],
    };
  }

  switch (action.type) {
    case 'FETCH_RATES_REQUEST':
      return {
        rates: [],
        loading: true,
        error: null,
        archives: [],
      };

    case 'FETCH_RATES_SUCCESS':
      return {
        rates: action.payload,
        loading: false,
        error: null,
        archives: [],
        };

    case 'FETCH_RATES_FAILURE':
      return {
        rates: [],
        loading: false,
        error: action.payload,
        archives: [],
        };

    default:
      return state.rateList;
  }
};

export default updateRateList;
