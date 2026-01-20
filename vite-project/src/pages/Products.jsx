import React from 'react'
import useFetch from '../hooks/useFetch'
import {deleteProduct, productsService} from '../services/productsService'
import ProductTable from '../components/ProductTable';

const Products = () => {
  const {products,error,loading,refetch} = useFetch(productsService);  
  
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

  const handleDelete = async(id) => {
    try {
      await deleteProduct(id);
      refetch();
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <ProductTable products={products} onDelete={handleDelete}/>
    </div>
  )
}

export default Products
