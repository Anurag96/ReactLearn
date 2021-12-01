import React from 'react'
import './Header.css'

const Header = ()=>{
    return(
     
        <div>
            <div className="header">
                <div className="header">
                    <a href="#default" className="logo">ONLINE STORE</a> &nbsp;
                </div>
            </div>
            <div>
            <form class="search">
                 <center>
                 <br/>
                    <input type="text" className="search__input" placeholder="Search"/>
                 </center>
            </form>
        </div>
        </div>
      

    )
}

export default Header;