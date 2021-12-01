import React,{Component} from 'react'
import './Header.css'

class Header extends Component {

    constructor(props) {

        //Here we need super to use THIS keyword to refer this.handleChange, else we get 'handleChange' is not defined
        super(props)
       
    }

    
    /** Always when onChange event is fired handleChange method is called */
    handleChange=(event)=>{
        // console.log(event)
            this.props.userText(event.target.value) //passing the data to Parent, by callling function in Parent
       }
    
    render() {
        return(
     
            <div>
                <div className="header">
                    <div className="header">
                        <a href="#default" className="logo">ONLINE GROCERY</a> &nbsp;
                    </div>
                </div>
                <div>
                <form className="search">
                     <center>
                     <br/>
                        <input type="text" className="search__input" placeholder="Search"  onChange={this.handleChange}/>
                     </center>
                </form>
            </div>
            </div>
          
    
        )
    }
}

export default Header;