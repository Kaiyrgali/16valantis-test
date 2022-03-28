import React from 'react';
import { RatesStoreServiceConsumer } from '../bookstore-service-context';

const withRatesStoreService = () => (Wrapped) => function (props) {
  return (
    <RatesStoreServiceConsumer>
      {
        (rateStoreService) => (
          <Wrapped
            {...props}
            rateStoreService={rateStoreService}
          />
        )
      }
    </RatesStoreServiceConsumer>
  );
};

export default withRatesStoreService;
