import React, { useState,useEffect } from "react";
import  {toast} from 'react-toastify'
import { auth } from "../../firebasec";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";








const RegisterComplete =({history})=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState('')

    // const { user }= useSelector((state)=> ({...state}));

    let dispatch=useDispatch()


 useEffect(()=>{
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
 },[history])


const handleSubmit =  async (e) =>{
    e.preventDefault()             //for preventing reload

    if(!email || !password){
        toast.error("Email and password is required")
        return;
    }

    if(password.length<6){
        toast.error("Password must be at least 6 character long ");
        return;
    }
    // console.log("ENV-->",process.env.REACT_APP_REGISTER_REDIRECT_URL)

    try {
        const result = await auth.signInWithEmailLink(email, 
            window.location.href
            )
            // console.log('RESULT',result);
            if(result.user.emailVerified){
                window.localStorage.removeItem('emailForRegistration')// remove user email from localStortage


                //get user id Token
                let user =auth.currentUser
                await user.updatePassword(password);
                const idTokenResult=await user.getIdTokenResult()

                //redux store
                console.log("user",user,"idTokenResult",idTokenResult);

                createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{
                            name:res.data.name,
                          email:user.email,
                          token:idTokenResult.token,
                          role:res.data.role,
                          _id: res.data._id
                        }
                      })
                })
                .catch(err => console.log(err))




                //redirect the user
                    history.push('/')

            }
            
    } catch (error) {
        // console.log(error)
        toast.error(error.message)
        
    }




}





    const completeRegistrationForm =()=> <form onSubmit={handleSubmit}>
        <input type="email" 
        className="form-control" 
        value={email} 
        disabled
        />
        <br />
        <input type="password" 
        className="form-control" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter Your password"
        autoFocus
        />
        <br />

        <button type="submit" className="btn  btn-raised shadow my-button w-xs  btn-outline-secondary">
            Complete registration
        </button>

    </form>
    return(
        <div className="container p-5">
            <div className="row">
             <div className="col-md-6 offset-md-3">
                    <h4>Register Complete</h4>
                   
                    {completeRegistrationForm()}
             </div>


            </div>
        </div>
    )
}

export default RegisterComplete