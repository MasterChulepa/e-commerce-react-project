import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignINSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componenent';
import CheckputPage from './pages/checkout/checkout.component';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { closeCartView } from './redux/cart/cart.actions';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartHiden } from './redux/cart/cart.selectors';

class App extends Component {


  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {    //this function returns us a close_connection method 
      if (userAuth) {
        const docRef = await createUserProfileDocument(userAuth);
        docRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
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
    const { currentUser, closeCart, hiden } = this.props;
    return (
      <Router>
        <div className="App" onClick={() => closeCart(hiden)}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/shop/*' element={<ShopPage />} />
            <Route exact path='/checkout' element={<CheckputPage />} />
            <Route exact path='/sign' element={currentUser ? <Navigate to="/" /> : <SignINSignUp />} />
          </Routes>
        </div>
      </Router >
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hiden: selectCartHiden(state)
})

const mapDispatchToProps = (dispatch) => ({
  setUser: user => dispatch(setCurrentUser(user)),
  closeCart: hiden => {
    if (!hiden) {
      dispatch(closeCartView())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)