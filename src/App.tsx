import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './components/landing.js';
import logo from './pictures/logo.jpeg';

function App() {
  return (
    <>
      <Router>
        <nav className='flex nav'>
          <figure>
            <img src={logo} className='logo' />
          </figure>
          <Link to={'/'}>Landing</Link>
        </nav>

        <Switch>
          <Route path={'/'}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
