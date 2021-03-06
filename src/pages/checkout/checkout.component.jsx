import React from "react";
import './checkout.styles.scss';
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectcartItemTotalPrice } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
                    cartItems.map((item, i) => <CheckoutItem key={i} item={item} />) :
                    <span>Nothing</span>
            }
            <span className="total">{`${total}$`}</span>
            <div className="payment-container">
                <div className="test-warning">
                    *Please use the fallowing test credit card for payments
                    <br />
                    4242 4242 4242 4242 - Exp: 08/23 - CVV: 123
                </div>
                <StripeCheckoutButton price={total} />
            </div>
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