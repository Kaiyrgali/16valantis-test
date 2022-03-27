import updateRateList from './rate-list';
import updateArchiveList from './archive-list';

const reducer = (state, action) => ({
  rateList: updateRateList(state, action),
  archiveList: updateArchiveList(state, action),
});

export default reducer;
