import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
