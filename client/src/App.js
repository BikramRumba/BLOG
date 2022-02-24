import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/home/single/Single";
import Write from "./components/pages/home/write/Write";
import Settings from "./components/pages/home/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import { Context } from "./context/Context";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useContext } from "react";

function App() {

  const {user} = useContext(Context);


  
  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route path='/' exact > <Home/></Route>
      {/* We need to protec the route because if user is logged in, 
      User should not be routed to the register route */}
      <Route path='/register' >{user? <Home/> :<Register/>}</Route>
      {/* Same with login like register */}
      <Route path='/login' >{user? <Home/>:<Login/>}</Route>
      {/* User can write a blog if the user is logged in otherwise must be registered */}
      <Route path='/write' >{user?<Write/>:<Register/>}</Route>
      {/* Same scenario for setting route */}
      <Route path='/settings' >{user? <Settings/>:<Register/>}</Route>
      <Route path='/post/:postId' >
      <Single/>
      </Route>
    </Switch>
  
   </Router>
  );
}

export default App;
