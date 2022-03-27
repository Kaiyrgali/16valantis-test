import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RateListItem from '../rate-list-item';
import { withRatesStoreService } from '../hoc';
import { fetchRates } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

function RateList({ ratesValute, today }) {
  return (
    <div>
      <h1>Exchange rates of the Central Bank of the Russian Federation</h1>
      <h2>
        for
        {today.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Rate</th>
            <th>% change</th>
          </tr>
        </thead>
        <tbody>
          { ratesValute.map((rate) => (
            <RateListItem
              key={rate.ID}
              rate={rate}
            />
          ))}
        </tbody>
      </table>
      <ReactTooltip />
    </div>
  );
}

class RateListContainer extends Component {
  componentDidMount() {
    this.props.fetchRates();
  }

  render() {
    const {
      rates, loading, error, today,
    } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    if (rates) {
      return (
        <RateList
          ratesValute={Object.values(rates.Valute)}
          today={today}
        />
      );
    }
  }
}

const mapStateToProps = ({
  rateList: {
    rates, loading, error, today,
  },
}) => ({
  rates, loading, error, today,
});

const mapDispatchToProps = (dispatch, { ratestoreService }) => bindActionCreators({
  fetchRates: fetchRates(ratestoreService),
}, dispatch);

export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(RateListContainer);
