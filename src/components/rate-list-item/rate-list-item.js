import React from 'react';
import { useNavigate } from 'react-router-dom';

function RateListItem({ ratesValute, rate }) {
  const {
    CharCode, Value, Previous, ID
  } = rate;
  const changeRate = ((Value/Previous-1)*100).toFixed(2);
  const navigate  = useNavigate()
  function gotoArchivePage () {navigate(`/archive/${ID}`)}
  
  return (
    <tr className='active'
        onClick={()=>gotoArchivePage()}
        >
      <td>{CharCode}</td>
      <td>{Value.toFixed(2)}</td>
      <td>{changeRate}</td>
    </tr>
  );
}

export default RateListItem;
