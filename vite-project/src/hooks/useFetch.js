import React, { useEffect, useState } from 'react'


const useFetch = (fetchFn) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async() =>
  {
      try {      
      setLoading(true);
      setError(null);

      const result= await fetchFn();
      setProducts(result);
    } catch (err) {
        setError(err.message);
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    load();
  },[]);
  return {products,error,loading,refetch: load}
}

export default useFetch
