import React from "react";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import StripeCheckout from  "../components/StripeCheckout"
import "../pages/stripe.css"


//load stripe outside of componet render to avoid recreating stripeon on every render

const promise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`)


// import { PayPalScriptProvider,PayPalButtons  } from "@paypal/react-paypal-js";
// import PaypalPayment from "../components/Paypal/PaypalPayment";
// import Checkout from "./Checkout";
// import { applyCoupon } from "../functions/user";
// import {useLocation} from 'react-router-dom';

const Payment = () => {

    // const location = useLocation()
    // const total = location.state.total

    // const initialOptions = {
    //     clientId: "ATf6ePEH0wUN7JtI6tc-wELfXaUjE_iPHWISztxlK3I9AxGXXMgXAU2YxHD4Ucouxl2SfEBl0QaknjQy",
    //     intent: "capture",
    // };

    



    return (
       
            <div className="container p-5 text-center">
                    <h4>Complete your purchase</h4>
                <Elements stripe={promise}>
                    <div className="col-md-8 offset-md-2">
                    <StripeCheckout/>
                    </div>
                </Elements>

                
            </div>
        





    )

}

export default Payment;