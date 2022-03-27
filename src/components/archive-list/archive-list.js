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


function ArchiveList ( { today, archives } ) {

  return (
    <div>
      <h1>Archive of exchange rates</h1>
      <h2>for the last 10 days</h2>   
      <table>
      {/* <caption>Archive of exchange rates for the last 10 days</caption> */}
        <thead>
          <tr>
            <th className="d-none d-lg-table-cell">Date</th>
            {/* <th className="d-none d-lg-table-cell">Цифр. код</th> */}
            <th className="d-none d-lg-table-cell">Code</th>
            {/* <th className="d-none d-lg-table-cell">% изм</th> */}
            {/* <th className="d-none d-lg-table-cell">Валюта</th> */}
            <th className="d-none d-lg-table-cell">Rate</th>
            <th className="d-none d-md-table-cell">Nominal</th>
          </tr>
        </thead>

        <tbody> 
          { archives.map((oneDay) => (
            <ArchiveListItem
            key={archives.indexOf(oneDay)}
            // archives={archives}
            // key={archives.id}
            today={today}
            oneDay={oneDay}
            
            />
          ))
          }
        </tbody>
        
      </table>
    </div> 
    );
}


class ArchiveListContainer extends Component {
  componentDidMount() {
    console.log('props', this.props);
    this.props.fetchArchive(this.props.rates, this.props.valuteId);
  }
  render() {
    const {
      today, archives
    } = this.props;
    if (archives != []) {
    return (
      <ArchiveList
      today = { today }
      archives = { archives }
        // gotoPageNew = {gotoPageNew}
      />
    );}
  }
}

const mapStateToProps = ({ rateList: { rates, today }, archiveList: { archives } }) => ({ rates, today, archives });

const mapDispatchToProps = (dispatch, { ratestoreService } ) =>
  bindActionCreators({
    fetchArchive: fetchArchive(ratestoreService),
  }, dispatch);
  
export default compose(
  withRatesStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ArchiveListContainer);

// export default ArchivePage;
