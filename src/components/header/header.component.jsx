import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdawn from '../cart/cart-dropdawn.component';
import { selectCartHiden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";


const Header = ({ currentUser, dropdawnIsHidden }) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">SHOP</Link>
                <Link to='/contacts' className="option">CONTACTS</Link>
                {
                    currentUser ? (<div onClick={() => auth.signOut()} className="option">SIGN OUT</div>) : (<Link to='/sign' className="option">SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {
                !dropdawnIsHidden ? (<CartDropdawn />) : null
            }
        </div>
    )
}
const mapStateToProps = (select) => (
    {
        currentUser: selectCurrentUser(select),
        dropdawnIsHidden: selectCartHiden(select)
    }
)

export default connect(mapStateToProps)(Header);