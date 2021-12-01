import React from 'react'

const DisplayItems = (props)=>{

    const renderItem = props.itemData.map((item)=>{
        return(
            <div key="{item._id}" >
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.filename}</p>
            </div>
        )
    })
    return(
        <div>
            {renderItem}
        </div>
    )

}

export default DisplayItems
