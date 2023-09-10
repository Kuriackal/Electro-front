// import React, { useEffect, useState } from 'react'
// import { PayPalButtons } from '@paypal/react-paypal-js';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import {toast} from "react-toastify"
// import { savepayment } from '../../functions/paypal';
// import { useDispatch, useSelector } from 'react-redux';

// const  PaypalPayment =({history}) => {

//   const location = useLocation()
//     const total = location.state.total

//     // const dispatch= useDispatch();
//     // const {user} = useSelector((state)=>({...state}))


//     // const[clientSecret,setClientSecret]= useState("")

//     // useEffect(()=>{
//     //   savepayment(user.token).then((res)=>{
//     //     console.log("create-payment",res.data)
//     //     setClientSecret((res.data))
//     //   })
//     // })

//     // const createOrder = (data) => {
//     //     // Order is created on the server and the order id is returned
//     //     return fetch("/my-server/create-paypal-order", {
//     //       method: "POST",
//     //        headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       // use the "body" param to optionally pass additional order information
//     //       // like product skus and quantities
//     //       body: JSON.stringify({
//     //         cart: [
//     //           {
//     //             sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
//     //             quantity: "YOUR_PRODUCT_QUANTITY",
//     //           },
//     //         ],
//     //       }),
//     //     })
//     //     .then((response) => response.json())
//     //     .then((order) => order.id);
//     //   };
//       // const onApprove = (data) => {
//       //    // Order is captured on the server and the response is returned to the browser
//       //    return fetch("/my-server/capture-paypal-order", {
//       //     method: "POST",
//       //      headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //     body: JSON.stringify({
//       //       orderID: data.orderID
//       //     })
//       //   })
//       //   .then((response) => response.json());
//       // };

//       const handleApprove =  (data, actions) => {
//         // console.log(data);
        
//         return actions.order.capture().then(function (details) {
//           console.log("details--->",details)
//           savepayment(details)
       
//           }).then((res)=>{
//             console.log("Payment saved",res)
//           }).catch((err)=>{
//             console.log("Payment failed",err)
//           })
    
//           // Prepare the data to be sent to the backend
       
        

//       }

//       // axios.post('/api/save-payment', info)
//       // .then(response => {
//       //   // Handle the response from the backend if needed
//       //   console.log(response.data);
//       // })
//       // .catch(error => {
//       //   // Handle errors from the backend
//       //   console.error(error);
//       // })
//       // .catch((err) => {
//       //   console.log('Error during payment capture:', err);
//       // });
  
        

      

//   return (
   
//    <div>
//      <PayPalButtons className='col-md-5 p-3'
      

//     createOrder={(data, actions) => {
//       // console.log("data-->",data)
//       // console.log("actions-->",actions)
//       return actions.order
//           .create({
//               purchase_units: [
//                   {
//                       amount: {
//                         currency_code:"USD",
//                           value: total ,
//                       },
//                   },
//               ],
//           })
//           .then((orderId) => {
//               // Your code here after create the order
//               return orderId;
//           });
//   }}
//   onSubmit={handleApprove}
//   />
//    </div>
//   )
  
// }

// export default PaypalPayment