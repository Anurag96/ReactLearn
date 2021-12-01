import React from 'react'
import './Product.css'

const DisplayItems = (props)=>{

    const renderItem = props.itemData.map((item)=>{
        return(

            <div className="card" key="{item.id}" >
                <p style={{color:"white"}}>{item.name}</p>
                <img src={item.image} style={{height:100,width:100}} alt="image"/>
                <p style={{color:"white"}}>Quantity : {item.unit}</p>
                <p style={{color:"white"}}>${item.price}</p>
            </div>
          
           
        )
    })
    return(
        <div className="mainDiv">
            {renderItem}
        </div>
    )

}

export default DisplayItems
