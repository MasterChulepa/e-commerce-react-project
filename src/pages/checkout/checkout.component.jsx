import React from "react";
import './checkout.styles.scss';
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectcartItemTotalPrice } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect"

const CheckputPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length ?
                    cartItems.map((item, i) => <CheckoutItem key={i} item = {item} />) :
                    <span>Nothing</span>
            }
            <span className="total">{`${total}$`}</span>
        </div>

    )
}
const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItem,
        total: selectcartItemTotalPrice
    }
)
export default connect(mapStateToProps)(CheckputPage);