import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "iPhone 14 Pro",
        price: 999,
        description: "The latest iPhone with advanced features",
        inStock: true
    }
  return (
    <div>
        <h1>Product's Information</h1>
        <p>Name : {product.name}</p>
        <p>Price : {product.price}</p>
        <p>Description : {product.description}</p>
        <p>inStocks : {product.inStock ? <>Oh yeah it is there in stocks baby</>:<>uh Oh out of stocks love</>}</p>
    </div>
  )
}

export default ProductInfo