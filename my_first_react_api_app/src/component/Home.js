import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import ProductDisplay from './ProductDisplay'
import JSON from './DB.json'

class Home extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
            products:JSON,
            filtered:JSON
        }
    }

        filterProduct = (keyword)=>{
            var output = this.state.products.filter((data)=>{
                return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            this.setState({filtered:output});
        }

        render(){
            return (
                <React.Fragment>
                        <Header userText={(data)=>{this.filterProduct(data)}}/>
                        <ProductDisplay prodData={this.state.filtered}/>
                     <Footer year="2022" month="Nov"/>
                </React.Fragment>
            )
                }
    }


export default Home