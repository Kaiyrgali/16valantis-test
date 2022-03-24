import React from 'react';
import { Link } from 'react-router-dom';
import FiltersPanel from '../filters-panel';
import './shop-header.css';
// import Tooltip from '@mui/material/Tooltip'

function ShopHeader() {
  return (
    <header className="shop-header row">
      {/* <Tooltip title="Logo"> */}
      <Link to="/">
        <div className="logo text-dark">BookStore</div>
      </Link>
      {/* </Tooltip> */}
      <FiltersPanel />
    </header>
  );
}

export default ShopHeader;
