import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './index.css';

import Landing from '../components/landing';
import Products from '../components/products';
import Cart from '../components/cart';
import About from '../components/about';

function App() {
  return (
    <>
      <Router>
        <nav className='flex nav'>
          <figure>
            <img alt='dat logo' src='/images/Logo.svg' className='logo' />
          </figure>
          <NavLink
            className='navBtn'
            to={'/home'}
            activeStyle={{ color: 'blue' }}
          >
            Home
          </NavLink>
          <NavLink
            className='navBtn'
            to={'/products'}
            activeStyle={{ color: 'blue' }}
          >
            Products
          </NavLink>
          <NavLink
            className='navBtn'
            to={'/about'}
            activeStyle={{ color: 'blue' }}
          >
            About
          </NavLink>
          <NavLink
            className='navBtn'
            to={'/cart'}
            activeStyle={{ color: 'blue' }}
          >
            Cart
          </NavLink>
        </nav>

        <Switch>
          <Route path={'/products'}>
            <Products />
          </Route>
          <Route path={'/cart'}>
            <Cart />
          </Route>
          <Route path={'/about'}>
            <About />
          </Route>
          <Route path={'/'}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
