import './styles/App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from './pages/home/Home';
import People from './pages/people/People';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/people' component={People} />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
