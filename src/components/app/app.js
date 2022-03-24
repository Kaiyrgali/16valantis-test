import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import HomePage from '../pages/home-page';
// import CartPage from '../pages/cart-page';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { RatesStoreServiceProvider } from '../bookstore-service-context';
import RatesStoreService from '../../services/bookstore-service';

const bookstoreService = new RatesStoreService();

function App() {

  return (
    <Provider store={store}>
      <ErrorBoundry>
        <RatesStoreServiceProvider value={bookstoreService}>
          <Router>
            <main role="main" className="container">
              <ShopHeader /> 
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </main>
          </Router>
        </RatesStoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  );
}

export default App;
