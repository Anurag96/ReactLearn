import React,{Component} from 'react'
import './Header.css'

class Header extends Component {

    constructor(props) {
        super(props)
    }

    handleChange=(event)=>{
        //console.log(event)
           this.setState({keyword:event.target.value ? event.target.value : 'SEARCH'});
        //    filterProduct(keyword) wrong way
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
                <form class="search">
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