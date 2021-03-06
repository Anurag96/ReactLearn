import React from 'react'
import './Product.css'

const DisplayItems = (props)=>{

    const renderItem = props.itemData.map((item)=>{
        return(

            <div className="card" key={Math.floor(Math.random()*100000)} >
            <center><h4 style={{color:"white"}}>{item.name.toUpperCase()}</h4>
                <img src={item.image} style={{height:180,width:185}} alt="companyimage"/>
                <p style={{color:"white"}}>Quantity : {item.unit}</p>
                <p style={{color:"white"}}>Price : Rs.{item.price}</p></center>
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
