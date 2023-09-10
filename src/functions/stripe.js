import axios from "axios"

export const createPaymentIntent= (authtoken,coupon)=>{
    axios.post(
        `/api/create-payment-intent`,
        
        {couponApplied:coupon},
        {
            headers:{
                authtoken,
            },
        }
    )
}