import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import Adduser from './components/users/Adduser';
import Edituser from './components/users/Edituser';
import User from './components/users/User';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const App = () =>{
  return(
<Router>
      <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home />}></Route>
      <Route path="/about" element= {<About />}></Route>
      <Route path="/contact" element = {<Contact />}></Route>
      <Route path="/user/adduser" element = {<Adduser />}></Route>
      <Route path="/user/edituser/:id" element = {<Edituser />}></Route>
      <Route path="/user/:id" element = {<User />}></Route>
      <Route path="*" element = {<PageNotFound />}></Route>
    </Routes>
   
    </div>
 </Router>
  )
}

export default App;