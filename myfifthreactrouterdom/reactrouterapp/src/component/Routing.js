import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import PostDetails from './PostDetails'

const Routing =()=>{
    return(
        <div className="container">
            <BrowserRouter>
                <Header />
                    <Route exact path="/" component={Home}/>
                    <Route  path="/profile" component={Profile}/>
                    <Route exact path="/post/:value" component={PostDetails}/>
                    <Route exact path="/post" component={Post}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
 }


export default Routing;