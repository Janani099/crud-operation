import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container">
    <a class="navbar-brand" href="#">CRUD APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white" >
        <li class="nav-item">
          <Link class="nav-link active m-2" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link m-2 " aria-current="page" to="/about">About</Link>
        </li>
      
        <li class="nav-item">
          <Link class="nav-link m-2" aria-current="page" to="/contact">Contact</Link>
        </li>
      </ul>
     
    </div>
    <a className="btn btn-outline-light" href="/user/adduser">Add Users</a>
  </div>
</nav>
  );
};

export default Navbar;
