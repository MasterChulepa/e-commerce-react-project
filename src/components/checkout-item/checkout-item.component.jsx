import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { removeItemToCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({item, remove}) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span onClick = {() => remove(item)} className="remove-button">&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(removeItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);