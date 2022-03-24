import React from 'react';
import { RatesStoreServiceConsumer } from '../bookstore-service-context';

const withRatesStoreService = () => (Wrapped) => function (props) {
  return (
    <RatesStoreServiceConsumer>
      {
        (ratestoreService) => (
          <Wrapped
            {...props}
            ratestoreService={ratestoreService}
          />
        )
      }
    </RatesStoreServiceConsumer>
  );
};

export default withRatesStoreService;
