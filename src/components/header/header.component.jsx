import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to= '/' className="logo-container">
                <Logo className = "logo" />
            </Link>
            <div className="options">
                <Link to ='/shop' className="option">SHOP</Link>
                <Link to ='/contacts' className="option">CONTACTS</Link>
                {
                    currentUser ? (<div onClick={() => auth.signOut()} className="option">SIGN OUT</div>) : (<Link to ='/sign' className="option">SIGN IN</Link>)
                }
            </div>
        </div>
    )
}
 const mapStateToProps = ({user}) => (
     {
        currentUser: user.currentUser
     }
 )

export default connect(mapStateToProps)(Header);