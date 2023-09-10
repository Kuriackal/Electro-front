import React, { useState,useEffect } from "react";
import  {toast} from 'react-toastify'
import { auth} from "../../firebasec";
import { Button } from "antd";
import { useSelector } from "react-redux";


const ForgotPassword =({history})=>{
    const [email,setEmail]=useState('')
    const [loading, setLoading]= useState(false);
    const {user}= useSelector((state)=> ({...state}));

    useEffect(()=>{
        if(user && user.token){
            history.push("/")
        } 
    },[user,history])

 const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true)

    const config={
        url:process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
        handleCodeInApp:true,
    }

    await auth.sendPasswordResetEmail(email,config)
    .then(()=>{
        setEmail('')
        setLoading(false)
        toast.success("Check your email for password reset link");

    })
    .catch((error)=>{
        setLoading(false)
        toast.error(error.message)
        console.log('Error msg in forgot Password',error)

    })

 }




    return <div className="container col-md-6 offset-md-3 p-5">
      {loading ?(<h4 className="text-danger">Loading</h4>):(
      <h4>Forget Password</h4>) }

      <form onSubmit={handleSubmit}>
        <input
         type="email "
         className="form-control"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         placeholder="Type your email"
         autoFocus
        />
        <br/>
        <Button className="btn  btn-raised shadow my-button w-xs  btn-outline-secondary" disabled={!email}>Submit</Button>
      </form>
    </div>
}

export default ForgotPassword