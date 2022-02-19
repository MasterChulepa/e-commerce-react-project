import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignINSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componenent';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

export default class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {    //this function returns us a close_connection method 
      if (userAuth){
        const docRef = await createUserProfileDocument(userAuth);
        docRef.onSnapshot( snapShot => {
          this.setState({currentUser:{ 
            id: snapShot.id,
            ...snapShot.data()
          }});
          console.log( this.state)
        });
      }else{
        this.setState({currentUser: userAuth})
      }

    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); // which we call here
  }
  render(){
    const {currentUser} = this.state;
    return(
      <Router>
    <div className="App">
      <Header user = {currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignINSignUp} />
      </Switch>
    </div>
      </Router >
    );
  }
}

