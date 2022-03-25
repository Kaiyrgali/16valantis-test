import React from 'react';
import BookListContainer from '../rate-list';
import './main.css';

function HomePage({ ratestoreService }) {
  return (
    <div>
      <BookListContainer />
    </div>
  );
}

export default HomePage;
