import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import {deleteProduct, productsService} from '../services/productsService'
import ProductTable from '../components/ProductTable';
import { Link } from 'react-router-dom';

const Products = () => {
  const {products,error,loading,refetch} = useFetch(productsService);  
  const [search, setSearch] = useState("");
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
      if (!window.confirm("Sigurno?")) return;
      await deleteProduct(id);
      refetch();
    } catch (error) {
      alert(error.message)
    }
  }

  const handleClick = (e) => {
    setSearch(e.target.value);
  }

  const filtered=products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <Link to={"/products/new"}>Create new product</Link>
      <p>Pretrazi:</p>
      <input value={search} onChange={handleClick}></input>
      
      <ProductTable products={filtered} onDelete={handleDelete}/>
    </div>
  )
}

export default Products
