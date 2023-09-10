import React, { useState } from 'react';
import UserNav from '../../components/nav/UserNav';
import { auth } from '../../firebasec';
import { toast } from 'react-toastify';


const Password = () =>{
const [password,setPassword]=useState("");
const [loading,setloading]=useState(false);

const handleSubmit = async (e)=>{
    e.preventDefault()
    setloading(true)
    // console.log(password)

    await auth.currentUser.updatePassword(password)
    .then(()=>{
        setloading(false)
        setPassword("")
        toast.success("Password updated")
    })
    .catch(err=>{
        setloading(false)
        toast.error(err.message);

    })
 
}

const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
    <div className='form-group'> 
    <label>Your Password</label>
    <input type="password"
    onChange={e => setPassword(e.target.value)}
    className='form-control  col-xl-3'
    placeholder='Enter your password'
    disabled={loading}
    value={password}
    />
    <br/>
    <button className='btn btn-primary' disabled={!password ||password.length < 6 || loading}>Submit</button>

    </div>
</form>
)


    return(

    
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'>
                <UserNav/>
            </div>
            <div className='col'>
              {loading ?  <h1 className='text-danger'>Loading</h1> : <h4>Password Update</h4> }
               {passwordUpdateForm()}
            </div>

        </div>

    </div>
)
 }

export default Password;