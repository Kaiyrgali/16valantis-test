const updateRateList = (state, action) => {

  if (state === undefined) {
    return {
      rates: [],
      loading: true,
      error: null,
      today: new Date(),
      archives: [],
    };
  }

  switch (action.type) {
    case 'FETCH_RATES_REQUEST': //зачем тогда это нужно?
      return {
        ...state.rateList,
      };

    case 'FETCH_RATES_SUCCESS':
      return {
        ...state.rateList,
        rates: action.payload,
        loading: false,
        today: new Date(action.payload.Date),
        };

    case 'FETCH_RATES_FAILURE':
      return {
        ...state.rateList,
        error: action.payload,
        };

    default:
      return state.rateList;
  }
};

export default updateRateList;
