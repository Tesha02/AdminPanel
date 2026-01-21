import React, { useEffect, useState } from 'react'


const useProduct = (fetchFn) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async() =>
  {
      try {      
      setLoading(true);
      setError(null);

      const result= await fetchFn();
      setProduct(result);
    } catch (err) {
        setError(err.message);
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    load();
  },[]);
  return {product,error,loading,refetch: load}
}

export default useProduct
