import React,{Component} from 'react'
import './Header.css'

class Header extends Component {

    constructor(){
        super();

        this.state = {
            title: 'ONLINE MEDICAL STORE',
            keyword :'SEARCH'
        }
     }

     handleChange=(event)=>{
        //console.log(event)
           this.setState({keyword:event.target.value ? event.target.value : 'SEARCH'});
        //    filterProduct(keyword) wrong way
        this.props.userText(event.target.value) //passing the data to Parent, by callling function in Parent
       }

     render() {

        return (
            <React.Fragment>
               <div  className="header">
                    <div className="header">
                        <a href="#default" className="logo">{this.state.title}</a>
                            <div className="header-right">
                                <a className="active" href="#home">Home</a>
                            </div>
                    </div>
                    <div>
                        <center>
                            <div>
                                <input type="text" onChange={this.handleChange}/>
                                <h3>SEARCH</h3>
                            </div>
                        </center>
                    </div>
                </div>
            </React.Fragment>
        )
     }
}

export default Header;