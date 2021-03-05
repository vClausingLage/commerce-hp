import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import Landing from '../components/landing';
import Products from '../components/products';

function App() {
  return (
    <>
      <Router>
        <nav className='flex nav'>
          <figure>
            <img alt='dat logo' src='/images/logo.jpeg' className='logo' />
          </figure>
          <Link className='navBtn' to={'/landing'}>
            Home
          </Link>
          <Link className='navBtn' to={'/products'}>
            Products
          </Link>
          <Link className='navBtn' to={'/cart'}>
            Cart
          </Link>
        </nav>

        <Switch>
          <Route path={'/landing'}>
            <Landing />
          </Route>
          <Route path={'/products'}>
            <Products />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
