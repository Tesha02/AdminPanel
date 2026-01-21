import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductTable = ({products, onDelete}) => {
  
  return (
    <div>
      <ul>
        {products.map(product=> (
          <li key={product.id}>{product.name} 
          <button onClick={()=>onDelete(product.id)}>Obrisi</button>
          <Link to={`/products/${product.id}`}>Detalji</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTable
