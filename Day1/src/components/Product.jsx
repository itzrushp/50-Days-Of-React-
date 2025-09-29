import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h2>Name of the Product : {props.name}</h2>
        <h2>Price of the product is : {props.price}</h2>
    </div>
  )
}

export default Product