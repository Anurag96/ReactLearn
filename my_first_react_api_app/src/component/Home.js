import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductDisplay from './ProductDisplay'
import JSON from './DB.json'

class Home extends React.Component {

  constructor(props){
      super(props);

      this.state={
          product : JSON
      }

  }

    render() {
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