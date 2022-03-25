const updateArchiveList = (state, action) => {

  if (state === undefined) {
    return {
      archives: [],
    };
  }

  switch (action.type) {
    case 'FETCH_ARCHIVE_REQUEST':
      console.log('fetch state', state);
      return {
        archives: action.payload,
      };

    case 'FETCH_ARCHIVE_SUCCESS':
      console.log('FETCH_ARCHIVE_payload', action.payload);
      return {
        archives: action.payload,
      };

    case 'FETCH_RATES_FAILURE':
      return {
        archives: [],
      };

    case 'GET_RATES_ARCHIVE':
      console.log(state) // скорректировать
      return {
        archives: state.rateList.books,
      }

    default:
      return state.rateList;
  }
};

export default updateArchiveList;
