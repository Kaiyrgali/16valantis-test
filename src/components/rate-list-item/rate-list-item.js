import React from 'react';
import './rate-list-item.css';

function BookListItem({ rate }) {
  const {
    CharCode, NumCode
  } = rate;
  return (
    <tr key={rate.ID}
    onClick = {()=>{}}>
      <td className="d-none d-lg-table-cell">{NumCode}</td>
      <td className="d-none d-lg-table-cell">{CharCode}</td>
      <td className="text-right">1</td>
      <td>Австралийский доллар</td>
      <td>76,9174</td>
      <td className="d-none d-md-table-cell">(−0,6)</td>
    </tr>
  );
}
// CharCode: "CHF"
ID: "R01775"
Name: "Швейцарский франк"
Nominal: 1
NumCode: "756"
Previous: 111.6196
Value: 110.3335
export default BookListItem;
