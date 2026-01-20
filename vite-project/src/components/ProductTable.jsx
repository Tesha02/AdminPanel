import React, { useState } from 'react'

const ProductTable = ({products, onDelete}) => {
  
  return (
    <div>
      <ul>
        {products.map(product=> (
          <li key={product.id}>{product.name} <button onClick={()=>onDelete(product.id)}>Obrisi</button></li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTable
