import axios from "axios";

export const getCoupons = async () =>
    await axios.get(`/api/coupons`);


export const removeCoupon = async (couponId, authtoken) =>
    await axios.delete(`/api/coupon/${couponId}`, {
        headers: {
            authtoken,
        }
    });


export const createCoupon = async (coupon, authtoken) =>
    await axios.post(`/api/coupon`,
        { coupon },
        {
            headers: {
                authtoken,
            },
        });