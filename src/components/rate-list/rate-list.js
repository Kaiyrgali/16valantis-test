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

// let ratesValute = [];
// let today = '';

function BookList({ ratesValute, today }) {
// console.log (rates);


  return (
    <div>
    <h1>Exchange rates of the Central Bank of the Russian Federation</h1>
    <h2>for {today.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', })}</h2>
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
    </div>
  );
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchRates();
  }
  render() {
    const {
      rates, loading, error, today
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
      // const ratesValute = Object.values(rates.Valute);
      // const parseDay = Date.parse(today);
      // const todayDate = new Date(Date.parse(today));
      // const todayDay = today.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', });
      // const todayYear = todayDate.getFullYear();
      // const todayMonth = todayDate.getMonth().toLocaleString('default', { month: 'short' });
      // const todayDay = todayDate.getDate();
      // console.log (todayDay)

      console.log('today', today);

      return ( 
        <BookList
        ratesValute={ Object.values(rates.Valute) }
        today = {today}
          // gotoPageNew = {gotoPageNew}
        />
      );
    } 
    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({ rateList: { rates, loading, error, today } }) => ({ rates, loading, error, today });

const mapDispatchToProps = (dispatch, { ratestoreService }) =>
  bindActionCreators({
    fetchRates: fetchRates(ratestoreService),
    gotoPageNew: gotoPage,
  }, dispatch);
export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
