import "./Header.css"

export default function Header() {
  return (
    <div  className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog Website</span>
        </div>
        <img className="headerImg" src= "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" 
        alt="" />
        
    </div>
  )
}
