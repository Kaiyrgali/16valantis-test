import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookListItem from '../rate-list-item';
import { withRatesStoreService } from '../hoc';
import { fetchRates, gotoPage } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './rate-list.css';

let ratesValute = [];

function BookList({ ratesValute }) {
// console.log (rates);

  return (
    <table>
      <thead>
        <tr>
          <th className="d-none d-lg-table-cell">Цифр. код</th>
          <th className="d-none d-lg-table-cell">Букв. код</th>
          <th className="d-none d-lg-table-cell">% изм</th>
          {/* <th className="d-none d-lg-table-cell">Валюта</th> */}
          <th className="d-none d-lg-table-cell">Курс</th>
          <th className="d-none d-md-table-cell">Номинал</th>
        </tr>
      </thead>
      <tbody>

        { ratesValute.map((rate) => ( 
          <BookListItem
          ratesValute={ratesValute}
            // onClick={console.log('dslknb')}
            key={rate.ID}
            // className="tooltip"
            rate={rate}
          />
        ))
        }

      </tbody>
      
    </table>
  );
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchRates();
  }
  render() {
    const {
      rates, loading, error
    } = this.props;
    // console.log(rates)
    // rates = Object.values(rates.Valute);
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    if (rates) {
      // console.log(rates)
      ratesValute = Object.values(rates.Valute);
    }
    return (
      <BookList
      ratesValute={ ratesValute }
        // gotoPageNew = {gotoPageNew}
      />
    );
  }
}

const mapStateToProps = ({ rateList: { rates, loading, error } }) => ({ rates, loading, error });

const mapDispatchToProps = (dispatch, { ratestoreService }) =>
  bindActionCreators({
    fetchRates: fetchRates(ratestoreService),
    gotoPageNew: gotoPage,
  }, dispatch);
export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
