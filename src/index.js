import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// import Home from './App';
import Landing from './pages/landing';
import Form from './pages/form';
import Game from './pages/game';
import Leaderboard from './pages/leaderboard';

ReactDOM.render(
  <Router>
    <>
      <Route path='/' exact component={Landing} />
      <Route path='/form' exact component={Form} />
      <Route path='/game' exact component={Game} />
      <Route path='/leaderboard' exact component={Leaderboard} />
      {/* <Route path='/' exact component={Game} /> */}
    </>
  </Router>,
  document.getElementById('root')
);
