import React from 'react'

const ProductList = () => {
    const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];
  return (
    <div>
        <h2>List Of Products</h2>
        <p>
            {
                products.map(({id, name , price})=>(

                    <div key = {id}>
                        <h4>Product Number : {id}</h4 > 
                        <p>Product Name : {name}</p>
                        <p>Product Price : {price}</p>
                    </div>
                ))
            }
        </p>
    </div>
  )
}

export default ProductList