import React from 'react'
import './TopBar.css'
import profile from '../image/profile.jpeg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF ="http://localhost:5000/images/"
  
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className='top' >
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter"> 
        <ul className="topList">
            <li className='topListItem'>
            {/* Color: inherit meaning same features will be passed down from the parents to the child element.
            style={{textDecoration:"none", color:"inherit"}}
            or we can declare this style globally in index.html root file. 
            We can pass that style to the all child elements. classname link is the global class name. */}
              <Link className='link' to='/' >HOME</Link> 
            </li>
            <li className='topListItem'> <Link className='link' to='/about' >ABOUT</Link></li>
            <li className='topListItem'> <Link className='link' to='/' >CONTACT</Link></li>
            <li className='topListItem'> <Link className='link' to='/write' >WRITE</Link></li>
            <li className='topListItem' onClick={handleLogout}> 
            {user && "LOGOUT"}</li>
        </ul>
       </div>
        <div className="topRight">
        {
          // If user is logged in image will be shown else ask to register or login 
          user? ( 
            <Link to='/settings'>
            <img className='topImg' 
        src={PF+user.profilePic}  />
        </Link>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                  <Link className='link' to='/login' >
                  LOGIN
                  </Link>
              </li>
               <li className='topListItem'>
                  <Link className='link' to='/register' >
                  REGISTER
                  </Link>
              </li>
            </ul>
            
          )
        }
       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
       
        </div>
    </div>
  )
}
