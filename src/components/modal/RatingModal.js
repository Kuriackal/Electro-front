import React,{useState} from "react";
import {Modal} from 'antd'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import { StarOutlined } from "@ant-design/icons";
import { useHistory,useParams } from "react-router-dom";

const RatingModal = ({children}) =>{
    const {user} =useSelector((state)=>({...state}));
    const [modalVisible, setModalVisible]= useState(false);

    let history =useHistory()
    let {slug} = useParams()

    // console.log("params",slug)


    const handleModal = ()=>{
        if(user && user.token){
            setModalVisible(true)
        }else{
            history.push({      //after clicking login to leave rating it take to login page. after logining in the user is send to  the rating page or the product view page itself
                pathname:"/login",
                state:{from:`/product/${slug}`},
            })
        }
    };

    return(
        <>
        <div onClick={handleModal}>

            <StarOutlined className="text-danger"/> <br/>
             {user ? "Leave a rating":"Login to leave rating"}

        </div>
        <Modal
        title="Leave your rating"
        centerd
        visible={modalVisible}
        onOk={() =>{
            setModalVisible(false)
            toast.success(" Thanks for your review.It will appear soon")
        }}
        onCancel ={()=> setModalVisible(false)}

        > {children}   
        </Modal>
        </>
    )

}

export default RatingModal;
