import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookListItem from '../rate-list-item';
import { withRatesStoreService } from '../hoc';
import { fetchRates, gotoPage } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './rate-list.css';

function BookList({ rates, page, gotoPageNew }) {
console.log (rates);

  return (
    <table>
      <tbody>
        <tr>
          <th className="d-none d-lg-table-cell">Цифр. код</th>
          <th className="d-none d-lg-table-cell">Букв. код</th>
          <th className="d-none d-lg-table-cell">Единиц</th>
          <th className="d-none d-lg-table-cell">Валюта</th>
          <th className="d-none d-lg-table-cell">Курс</th>
          <th className="d-none d-md-table-cell"></th>
        </tr>
      </tbody>
      
      { rates.map((rate) => ( 
        <li key={rate.ID}
            onClick = {()=>{}}>
          <BookListItem
            rate={rate}
          />
        </li>
      ))
      }
      
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

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <BookList
        rates={rates}
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
