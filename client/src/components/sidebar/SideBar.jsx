import { useEffect, useState } from 'react'
import './SideBar.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function SideBar() {
  const[cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className='sideBar'>
    <div className="sideBarItem">
        <span className='sideBarTitle' >ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1579710758949-3ab36db30f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""  />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Doloribus architecto natus, dolorum aperiam dolores, quia a quam facilis ratione ullam rem, 
         expedita illo qui! 
        Voluptates ex voluptate incidunt praesentium neque.</p>
    </div>
    <div className="sidebarItem">
        <span className='sideBarTitle' >CATEGORIES</span>
        <ul className='sideBarList' > 
        {cats.map(c=>(
          <Link to={`/?cat=${c.name}`} className='link'>
          <li className='sideBarListItem'>{c.name}</li>
          </Link>
          ))}
      
        </ul>
    </div>
    <div className="sideBarItem">
    <span className='sideBarTitle' >FOLLOW US</span>
        <div className="sideBarSocial">
        <i className="sideBarIcon fa-brands fa-facebook"></i>
        <i className="sideBarIcon fa-brands fa-twitter-square"></i>
        <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
        <i className="sideBarIcon fa-brands fa-instagram-square"></i>
        </div>
    </div>
    </div>
  )
}
