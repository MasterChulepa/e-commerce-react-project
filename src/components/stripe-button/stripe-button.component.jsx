import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceInCents = price*100;
    const publishableKey = "pk_test_51KcQM2EL6fnWF78WdCKNpXlbaidJGPiNUdxphNoQdXWo69Ny2nki3PFksL8WXiedMyILqC7MbznjupW0S9xENzt800XZEyntEs";
    const onToken = token =>{
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
        label="Pay Now"
        name="Philip Pirrip Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is: ${price}$`}
        amount = {priceInCents}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey = {publishableKey}/>
    )
}
export default StripeCheckoutButton;