import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArchiveListItem from '../archive-list-item';
import { withRatesStoreService } from '../hoc';
import { fetchArchive } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

function ArchiveList({ today, archives }) {
  if (archives) {
    return (
      <div>
        <h1>Archive of exchange rates</h1>
        <h2>for the last 10 days</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Code</th>
              <th>Rate</th>
              <th>Nominal</th>
            </tr>
          </thead>

          <tbody>
            { archives.map((oneDay) => (
              <ArchiveListItem
                key={archives.indexOf(oneDay)}
                today={today}
                oneDay={oneDay}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <Spinner />;
}

class ArchiveListContainer extends Component {
  componentDidMount() {
    this.props.fetchArchive(this.props.rates, this.props.valuteId);
  }

  render() {
    const {
      today, archives,
    } = this.props;
    return (
      <ArchiveList
        today={today}
        archives={archives}
      />
    );
  }
}

const mapStateToProps = ({ rateList: { rates, today }, archiveList: { archives } }) => ({ rates, today, archives });

const mapDispatchToProps = (dispatch, { rateStoreService }) => bindActionCreators({
  fetchArchive: fetchArchive(rateStoreService),
}, dispatch);

export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ArchiveListContainer);