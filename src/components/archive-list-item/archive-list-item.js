import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchivePage } from '../pages';

// gotoArchivePage = (id) = navigate('/:id')

function ArchiveListItem( { oneDay, todayDate} ) {
console.log('todayDate', todayDate);
console.log('oneDay', oneDay);
const newDate = Date.parse(todayDate)
const formatDate = new Date(newDate);
const formatDateR = formatDate.toDateString();
console.log(newDate, formatDateR);

// let now = new Date();
// const newDay = moment(now).format('YYYY-MM-DD');
// console.dir(now)
  // const {
  //   CharCode
  // // //   archives.CharCode, NumCode, Value, Previous, Nominal, ID, Name
  // } = oneDay;
  // console.log(CharCode);
// console.log(oneDay[0].ID)
  // const changeRate = () => {  
  //   if (Value>Previous) {
  //     return ((1-Value/Previous)*100).toFixed(2);
  //   } else {
  //     return ((Value/Previous-1)*100).toFixed(2);
  //   }
  // };
  // const navigate  = useNavigate()
  // function gotoArchivePage () {navigate(`/archive/${ID}`)}
  return (
    
    <tr >
      <td className="d-none d-lg-table-cell">{ formatDateR }</td>
      <td className="d-none d-lg-table-cell">{oneDay[0].NumCode}</td>
      <td className="d-none d-lg-table-cell">{oneDay[0].CharCode}</td>
      <td className="text-right">{oneDay[0].ID}</td>
      <td className="d-none d-lg-table-cell">{oneDay[0].Value}</td>
      <td className="d-none d-md-table-cell">{oneDay[0].Nominal}</td>
    </tr>
  );
}
// // CharCode: "CHF"
// // ID: "R01775"
// Name: "Швейцарский франк"
// Nominal: 1
// NumCode: "756"
// Previous: 111.6196
// Value: 110.3335
export default ArchiveListItem;
