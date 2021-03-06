import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import { HomePage, ArchivePage, NotFound } from '../pages';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { RatesStoreServiceProvider } from '../bookstore-service-context';
import RatesStoreService from '../../services/rates-store-service';

const rateStoreService = new RatesStoreService();

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundry>
        <RatesStoreServiceProvider value={rateStoreService}>
          <Router>
            <ShopHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/archive/*" element={<ArchivePage />} />
            </Routes>
          </Router>
        </RatesStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
}

export default App;
