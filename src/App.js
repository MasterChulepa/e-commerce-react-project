import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const Hats = () => {
  return <div>HATS</div>
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hats' component={Hats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
