import React from 'react'

const ProductTable = ({products}) => {
  return (
    <div>
      <ul>
        {products.map(product=> (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTable
