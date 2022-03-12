import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { toggleCartView } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const CartDropdawn = ( ) => {
    const novigate = useNavigate();
    const cartItems = useSelector(state => selectCartItem(state))
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map((cartItem, i) => <CartItem key={i} item={cartItem} />) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                novigate(`/checkout`);
                store.dispatch(toggleCartView());
            }} >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default CartDropdawn;