import updateRateList from './rate-list';

const reducer = (state, action) => ({
  rateList: updateRateList(state, action)
});

export default reducer;
