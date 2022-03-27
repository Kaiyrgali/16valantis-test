import React from 'react';

let countDays = 0;

function ArchiveListItem({ today, oneDay }) {
  today = new Date(Date.parse(today) - 86400000 * countDays);
  countDays++; // перенести в обьявление функции

  return (
    <tr>
      <td>{ today.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
      <td>{oneDay[0].CharCode}</td>
      <td>{oneDay[0].Value}</td>
      <td>{oneDay[0].Nominal}</td>
    </tr>
  );
}

export default ArchiveListItem;
