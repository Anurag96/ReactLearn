import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductDisplay from './ProductDisplay'
import JSON from './DB.json'

class Home extends React.Component {

    //Example of using Props to send data from Parent to Child Component
  constructor(props){
      super(props);

      //Created a state with data (this.state.product)
      this.state={
          product : JSON
      }

  }

    render() {
//    <!-- Here we how we attach the data to Child class || For example we have attached prodData to ProductDisplay child component -->
        return (
            <React.Fragment>
                <Header/>
                
                <ProductDisplay prodData={this.state.product}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;