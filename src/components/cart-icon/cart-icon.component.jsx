import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { cartAction } from "../../redux/cart/cart.actions";
import { selectCartItemQuantity } from "../../redux/cart/cart.selectors";
import './cart-icon.styles.scss';


const CartIcon = ({ CartAction, totalCarts }) => {
    return (
        <div className="cart-icon" onClick={CartAction}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalCarts}</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    CartAction: () => dispatch(cartAction())
})
const mapStateToProps = (state) => ({
    totalCarts: selectCartItemQuantity(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);