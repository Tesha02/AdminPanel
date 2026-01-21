import React from 'react'
import ProductForm from '../components/ProductForm'
import { createProduct } from '../services/productsService'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductCreate = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const initialV= {
    name: "",
    price: 0,
    category: "",
    inStock: false
  }

  const handleCreate = async(product) => {
    try {
      setError(null);
      await createProduct(product);
      navigate("/products",{replace: true});
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <ProductForm initialValues={initialV} Fn={handleCreate}/>
    </div>
  )
}

export default ProductCreate
