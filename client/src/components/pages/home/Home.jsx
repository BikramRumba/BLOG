import { useEffect, useState } from 'react';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import SideBar from '../../sidebar/SideBar'
import "./Home.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Home() {
const[posts, setPosts] = useState([]);
const {search} = useLocation();

useEffect(()=>{
  const fetchPosts = async()=>{
    const res = await axios.get('/posts'+search)
    setPosts(res.data)
  }
  fetchPosts();
},[search])
  return (
    <>
        <Header/>
    <div className="home" > 
    <Posts  posts={posts} />
    <SideBar/>
    </div>
    </>
  )
}
