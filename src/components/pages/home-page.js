import React from 'react';
import BookListContainer from '../rate-list';
import './main.css';

function HomePage({ ratestoreService }) {
  return (
    <div>
      <BookListContainer books={[]} />
    </div>
  );
}

export default HomePage;
