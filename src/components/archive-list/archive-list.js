import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArchiveListItem from '../archive-list-item';
import { withRatesStoreService } from '../hoc';
import { fetchArchive } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

// import BookListContainer from '../rate-list';
// import '../../../main.css';

function ArchiveList ( todayDate, archives ) {
  console.log('archives', archives);
  return (
      <table>
        <thead>
          <tr>
            <th className="d-none d-lg-table-cell">Дата</th>
            <th className="d-none d-lg-table-cell">Цифр. код</th>
            <th className="d-none d-lg-table-cell">Букв. код</th>
            <th className="d-none d-lg-table-cell">% изм</th>
            {/* <th className="d-none d-lg-table-cell">Валюта</th> */}
            <th className="d-none d-lg-table-cell">Курс</th>
            <th className="d-none d-md-table-cell">Номинал</th>
          </tr>
        </thead>

        {/* <tbody>
          { archives.map(() => ( 
            <ArchiveListItem
              archive={archives}
              // key={archive.id}
              oneDayArchive={oneDayArchive}
            />
          ))
          }
        </tbody> */}
        
      </table>
    );
}

class ArchiveListContainer extends Component {
  componentDidMount() {
    console.log('props', this.props);
    this.props.fetchArchive(this.props.rates, this.props.valuteId);
  }
  render() {
    const {
      rates, archives
    } = this.props;
    console.log("archives", archives);
    // console.log(rates)
    // rates = Object.values(rates.Valute);
    return (
      <ArchiveList
      todayDate = {rates.Date} // начинаем делать вторую страницу 
      archives={ archives }
        // gotoPageNew = {gotoPageNew}
      />
    );
  }
}

const mapStateToProps = ({ rateList: { rates }, archiveList: { archives } }) => ({ rates, archives });

const mapDispatchToProps = (dispatch, { ratestoreService } ) =>
  bindActionCreators({
    fetchArchive: fetchArchive(ratestoreService),
    // gotoPageNew: gotoPage,
  }, dispatch);
  
export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ArchiveListContainer);

// export default ArchivePage;
