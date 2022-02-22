import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import CartAction from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss';

const CartIcon = ({CartAction}) => {
    return (
        <div className="cart-icon" onClick={CartAction}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    CartAction: () => dispatch(CartAction())
})

export default connect(null, mapDispatchToProps)(CartIcon);