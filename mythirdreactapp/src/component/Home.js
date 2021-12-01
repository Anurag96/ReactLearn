import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import DisplayItems from './DisplayItems'
import JSON from './GROCERIES.json'

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            products:JSON,
            searchProduct:JSON
        }
    }
    render() {
        console.log(this.state.products)
        return(
            <div>
                <Header/>
                <DisplayItems itemData={this.state.searchProduct}/>
                <Footer/>
            </div>
        )
    }
}
export default Home