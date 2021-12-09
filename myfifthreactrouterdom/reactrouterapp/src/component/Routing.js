import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'

const Routing =()=>{
    return(
        <BrowserRouter>
            <Header />
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/post" component={Post}/>
            <Footer/>
        </BrowserRouter>
    )
 }


export default Routing;