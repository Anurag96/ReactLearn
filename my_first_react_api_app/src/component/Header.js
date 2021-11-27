import React from 'react'
import './Header.css'

const Header = ()=>{
    return (
        <React.Fragment>
            <div class="header">
                <a href="#default" class="logo">ANURAG'S ONLINE MEDICAL STORE</a>
                    <div class="header-right">
                         <a class="active" href="#home">Home</a>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Header;