import React from 'react';
import { RatesStoreServiceConsumer } from '../bookstore-service-context';

const withRatesStoreService = () => (Wrapped) => function (props) {
  return (
    <RatesStoreServiceConsumer>
      {
        (bookstoreService) => (
          <Wrapped
            {...props}
            bookstoreService={bookstoreService}
          />
        )
      }
    </RatesStoreServiceConsumer>
  );
};

export default withRatesStoreService;
