import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { addItemToCart, reduceNumberOfItems, removeItemToCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, remove, add, reduce }) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span onClick={() => reduce(item)} className="controller">&#10094;</span>
                <span className="value">{quantity}</span>
                <span onClick={() => add(item)} className="controller">&#10095;</span>
            </div>
            <span className="price">{price}</span>
            <span onClick={() => remove(item)} className="remove-button">&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(removeItemToCart(item)),
    add: item => dispatch(addItemToCart(item)),
    reduce: item => dispatch(reduceNumberOfItems(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);