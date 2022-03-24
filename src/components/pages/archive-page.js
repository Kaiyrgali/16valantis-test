import React from 'react';
import { useParams } from 'react-router-dom';
import BookListContainer from '../rate-list';
import './main.css';

function ArchivePage ({ ratestoreService }) {
  const params = useParams();
  const prodId = Object.values(params);
  console.log('gone to ', prodId, params);
  // console.log(data);
  
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

        <tbody>
          {/* { rates.map((rate) => ( 
            <BookListItem
              rates={rates}
              key={rate.ID}
              rate={rate}
            />
          ))
          } */}
        </tbody>
        
      </table>
    );
}


export default ArchivePage;
