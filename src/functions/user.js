import axios from "axios";

export const userCart = async (cart,authtoken)=>
    await axios.post(
        `/api/user/cart`,{cart},
    {
        headers:{
            authtoken,
        },
    }
    );

    export const getUserCart = async (authtoken)=>
    await axios.get( `/api/user/cart`,
    {
        headers:{
            authtoken,
        },
    }
    );



    export const emptytUserCart = async (authtoken)=>
    await axios.delete( `/api/user/cart`,
    {
        headers:{
            authtoken,
        },
    }
    );



    export const saveUserAddress = async (authtoken,address)=>
    await axios.post(
        `/api/user/address`,{address},
    {
        headers:{
            authtoken,
        },
    }
    );

    export const applyCoupon = async (authtoken,coupon)=>
    await axios.post(
        `/api/user/cart/coupon`,
        {coupon},
    {
        headers:{
            authtoken,
        },
    }
    );

    export const createOrder = async (stripeResponse,authtoken,)=>
    await axios.post(
        `/api/user/order`,
        {stripeResponse},
    {
        headers:{
            authtoken,
        },
    }
    );


    export const getUserOrders = async (authtoken)=>
    await axios.get( `/api/user/orders`,
    {
        headers:{
            authtoken,
        },
    }
    );

    export const getWishlist = async (authtoken)=>
    await axios.get( `/api/user/wishlist`,
    {
        headers:{
            authtoken,
        },
    }
    );

    export const removeWishlist = async (productId,authtoken)=>
    await axios.put( `/api/user/wishlist/${productId}`,
    {},
    
    {
        headers:{
            authtoken,
        },
    }
    );
    export const addToWishlist = async (productId,authtoken)=>
    await axios.post( `/api/user/wishlist`,
    {productId},
    {
        headers:{
            authtoken,
        },
    }
    );


    export const createCashOrderForUser = async (authtoken,COD,couponTrueOrFalse)=>
    await axios.post(
        `/api/user/cash-order`,
        {couponApplied:couponTrueOrFalse,COD},
    {
        headers:{
            authtoken,
        },
    }
    );