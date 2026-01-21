import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct';
import { getProductById } from '../services/productsService';

const ProductDetails = () => {
  const id=Number(useParams().id);
  const {product,error,loading,refetch}=useProduct(()=>getProductById(id));
  const navigate = useNavigate();
  const handleEdit= () => {
    navigate(`/products/${id}/edit`);
  }

    if(loading) {
    return <p>Ucitavanje podataka</p>
  }

  if(error) {
    return (
      <>
        <p>Desila se greska pri ucitavanju podataka</p>
        <button onClick={refetch}>Pokusaj Opet</button>
      </>
    )
  }

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <ul>
        <li>Price: {product.price}</li>
        <li>Category: {product.category}</li>
        <li>In stock: {product.inStock ? "true" : "false"}</li>        
      </ul>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default ProductDetails
