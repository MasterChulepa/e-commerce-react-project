import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartView } from "../../redux/cart/cart.actions";

const CartDropdawn = ({ cartItems, history, match, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map((cartItem, i) => <CartItem key={i} item={cartItem} />) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push(`${match.url}checkout`);
                dispatch(toggleCartView());
            }} >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}
const mapStateToProps = (state) => (
    { cartItems: selectCartItem(state) }
)
export default withRouter(connect(mapStateToProps)(CartDropdawn));