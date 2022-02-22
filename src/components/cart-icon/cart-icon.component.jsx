import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { cartAction } from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss';

const CartIcon = ({ CartAction, carts }) => {
    return (
        <div className="cart-icon" onClick={CartAction}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{carts.length}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    CartAction: () => dispatch(cartAction())
})
const mapStateToProps = ({cart}) =>({
    carts: cart.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);