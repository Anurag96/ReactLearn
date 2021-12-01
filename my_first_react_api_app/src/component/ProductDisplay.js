import React from 'react';
import './Product.css'

const ProductDisplay = (props) => {
    
    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="card" key={item._id}>
                <img src={item.filename} style={{height:100,width:100}} alt="image"/>
                <h2>{item.price}</h2>
                <p>{item.description}</p>
            </div>
           
        )
    })

    return(
        <div className="mainDiv">
           {renderProduct}
        </div>
    )
}

export default ProductDisplay