const updateArchiveList = (state, action) => {

  if (state === undefined) {
    return {
      archives: [],
    };
  }

  switch (action.type) {

    case 'FETCH_ARCHIVE_REQUEST':
      return {
        archives: [],
      };

      case 'FETCH_ARCHIVE_SUCCESS':
      return {
        archives: action.payload,
      };

    case 'FETCH_RATES_FAILURE':
      return {
        archives: [],
      };

    case 'GET_RATES_ARCHIVE':
      return {
        archives: state.rateList.books,
      }

    default:
      return state.rateList;
  }
};

export default updateArchiveList;
