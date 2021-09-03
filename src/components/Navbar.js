import React from 'react';
import "../App.css"
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper yellow">
          <Link to="/" className="brandlogo">iak-gram</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/create">Create Post</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar