import React from "react";
import './cart-item.styles.scss';
import { connect } from "react-redux";
import { removeItemToCart } from "../../redux/cart/cart.actions";

const CartItem = ({ item, remove }) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity}{`x${price}$`} </span>
            </div>
            <span onClick = {() => remove(item)} className="remove-button">&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(removeItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CartItem);