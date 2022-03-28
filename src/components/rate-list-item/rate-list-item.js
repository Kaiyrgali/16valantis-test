import React from 'react';
import { useNavigate } from 'react-router-dom';

function RateListItem({ rate }) {
  const {
    CharCode, Value, Previous, ID, Name,
  } = rate;
  const changeRate = ((Value / Previous - 1) * 100).toFixed(2);
  const navigate = useNavigate();
  const gotoArchivePage = () => { navigate(`/archive/${ID}`); }

  return (
    <tr
      className="active"
      onClick={gotoArchivePage}
      data-tip={Name}
    >
      <td>{CharCode}</td>
      <td>{Value.toFixed(2)}</td>
      <td>{changeRate}</td>
    </tr>
  );
}

export default RateListItem;
