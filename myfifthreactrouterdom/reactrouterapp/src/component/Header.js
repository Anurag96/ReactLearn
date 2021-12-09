import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header =()=>{
    return(
            
            <div class="header">
            <a href="#default" class="logo">REACT ROUTER</a>
            <div class="header-right">
            <Link className="active" to="/">Home</Link>
            <Link to="/post">Post</Link>
            <Link to="/profile">Profile</Link>
            </div>
            </div>
    )
 }


export default Header;

