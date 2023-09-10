import React, { useState } from "react";
import {Menu,Badge} from 'antd'
import { HomeOutlined,
  LogoutOutlined , 
  SettingOutlined,
  UserOutlined,
  UserAddOutlined ,
  ShoppingOutlined,
  ShoppingCartOutlined 
}  from '@ant-design/icons';
import {Link} from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Search from '../forms/Search'

const {SubMenu,Item}=Menu;//

const Header =() =>{
    const [current,setCurrent]=useState('');

    let dispatch=useDispatch();

    let {user,cart}=useSelector((state)=>({...state}));



    let history = useHistory();

    const handleClick =(e)=>{
        // console.log(e.key);

        setCurrent(e.key);

    };

    const logout = ()=> {
        firebase.auth().signOut();
        dispatch({
            type:"LOGOUT",
            payload:null,
        });
        history.push('/login')
    }



    return(
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
             <Item key="home" icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Item>
            <div >
            <Item key="shop" icon={<ShoppingOutlined />} className="">
                <Link to='/shop'>Shop</Link>
            </Item>
            </div>
            <div >
            <Item key="shop" icon={<ShoppingCartOutlined />} className="">
                <Link to='/cart'>
                  <Badge count={cart.length} offset={[10,0]}> 
                    Cart
                  </Badge>
                </Link>
            </Item>
            </div>

            <span className=" ml-auto  p-1">
            <Search />
           </span>
         
            <div>

            {!user &&(
              <Item key="login" icon={<UserOutlined />} className="">
              <Link to='/login'>Login</Link>
             </Item>
           )}

             {!user &&(
                 <Item key="register" icon={<UserAddOutlined />} className="justify-content-end" >
                 <Link to='/register'>Register</Link>
               </Item>
             )}
      
          {user &&(
                <SubMenu icon={<SettingOutlined/>} 
                title={user.email && user.email.split('@')[0]} //it split it into array (eg:name@gmail.com to [name,gmail.com])
                className="">
                {user && user.role ==='subscriber' &&(
                  <Item>
                    <Link to="/user/history">Dashboard</Link>
                  </Item>
                )}

                {user && user.role ==='admin' &&(
                  <Item>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </Item>
                )}
              
                <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>

            </SubMenu>
            )}
        </div>
      
              
          
          
          

            </Menu>
    )
}

export default Header