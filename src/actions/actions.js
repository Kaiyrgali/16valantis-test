const ratesRequested = () => ({
  type: 'FETCH_RATES_REQUEST',
});

const ratesLoaded = (newRates) => ({
  type: 'FETCH_RATES_SUCCESS',
  payload: newRates,
});

const ratesError = (error) => ({
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

const fetchRates = (rateStoreService) => () => (dispatch) => {
  dispatch(ratesRequested());
  rateStoreService.getDailyRates()
    .then((data) => dispatch(ratesLoaded(data)))
    .catch((err) => dispatch(ratesError(err)));
};

const fetchArchive = (rateStoreService) => (data, valuteId) => (dispatch) => {
  dispatch(archiveRequested());
  rateStoreService.getArchiveRates(data, valuteId)
    .then((newData) => dispatch(archiveLoaded(newData)));
};

export {
  fetchRates,
  fetchArchive,
};
