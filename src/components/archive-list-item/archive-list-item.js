import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchivePage } from '../pages';

// gotoArchivePage = (id) = navigate('/:id')

function ArchiveListItem( archive, oneDayArchive ) {
console.log('todayDate', todayDate)
  const {
    dayCharCode=Object.values(archives.CharCode)
  //   archives.CharCode, NumCode, Value, Previous, Nominal, ID, Name
  } = archives;
  console.log(dayCharCode);
  // const changeRate = () => {  
  //   if (Value>Previous) {
  //     return ((1-Value/Previous)*100).toFixed(2);
  //   } else {
  //     return ((Value/Previous-1)*100).toFixed(2);
  //   }
  // };
  // const navigate  = useNavigate()
  // function gotoArchivePage () {navigate(`/archive/${ID}`)}
  // return (
    
  //   <tr className='tooltip'
  //       onClick={()=>gotoArchivePage()}
  //       >
  //     <td className="d-none d-lg-table-cell">{NumCode}</td>
  //     <td className="d-none d-lg-table-cell">{CharCode}</td>
  //     <td className="text-right">{changeRate()}</td>
  //     <td className="d-none d-lg-table-cell">{Value}</td>
  //     <td className="d-none d-md-table-cell">{Nominal}</td>
  //   </tr>
  // );
}
// CharCode: "CHF"
// ID: "R01775"
// Name: "Швейцарский франк"
// Nominal: 1
// NumCode: "756"
// Previous: 111.6196
// Value: 110.3335
export default ArchiveListItem;
