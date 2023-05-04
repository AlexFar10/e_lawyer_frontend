import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const Checkout = () => {
    const clientId = "Ab4bmljwE2H_Bmk0hBwJKdUKXrnnKlRwEcWkMVaj6V68IRVE1DOwgPz6G472fYBBFLsSvU_iOADb3yeV";
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "13.99"
                    }
                }
            ]
        });
    };
    const onApprove = async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
    };
    return (
        <div className="App-body">
            <h1>How to be Great at Anything (E-Book)</h1>
            <img height="300" src="/ebook.jpg" alt="How to be Great at Anything (Book Cover)" />
            <p><span className="book-price">$13.99</span></p>
            <PayPalScriptProvider options={{ "client-id": clientId }}>
                <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>
        </div>
    );
};
export default Checkout;