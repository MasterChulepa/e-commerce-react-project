import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignINSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componenent';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {


  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {    //this function returns us a close_connection method 
      if (userAuth) {
        const docRef = await createUserProfileDocument(userAuth);
        docRef.onSnapshot(snapShot => {
            setUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state)
        });
      } else {
        setUser(userAuth)
      }

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth(); // which we call here
  }
  render() {
    const {currentUser} = this.props;
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/sign' render={ () =>  currentUser ? (<Redirect to = '/' />) : (<SignINSignUp/>) }/>
          </Switch>
        </div>
      </Router >
    );
  }
}
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)