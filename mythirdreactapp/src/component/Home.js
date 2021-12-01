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
    filterProduct(keyword){
        var output=this.state.products.filter((item)=>{
          return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        });
        this.setState({searchProduct:output})
    }
    render() {
        // console.log(this.state.products)
        return(
            <div>
                <Header userText={(data)=>{this.filterProduct(data)}}/>
                <DisplayItems itemData={this.state.searchProduct}/>
                <Footer/>
            </div>
        )
    }
}
export default Home